#!/usr/bin/env python3
"""V117 focused regression checks for 6x6 Sudoku box geometries."""
from copy import deepcopy

def count_solutions(grid, box_h, box_w, stop_after=10000):
    n = len(grid)
    board = deepcopy(grid)
    count = 0

    def candidates(r, c):
        used = set(board[r])
        used.update(board[i][c] for i in range(n))
        r0 = (r // box_h) * box_h
        c0 = (c // box_w) * box_w
        for rr in range(r0, r0 + box_h):
            for cc in range(c0, c0 + box_w):
                used.add(board[rr][cc])
        return [v for v in range(1, n + 1) if v not in used]

    def solve():
        nonlocal count
        best = None
        best_candidates = None
        for r in range(n):
            for c in range(n):
                if board[r][c] == 0:
                    options = candidates(r, c)
                    if not options:
                        return
                    if best_candidates is None or len(options) < len(best_candidates):
                        best, best_candidates = (r, c), options
                        if len(options) == 1:
                            break
            if best_candidates is not None and len(best_candidates) == 1:
                break
        if best is None:
            count += 1
            return
        r, c = best
        for value in best_candidates:
            board[r][c] = value
            solve()
            board[r][c] = 0
            if count >= stop_after:
                return

    solve()
    return count

def valid_solution(grid, box_h, box_w):
    n = len(grid)
    expected = set(range(1, n + 1))
    if any(set(row) != expected for row in grid):
        return False
    if any({grid[r][c] for r in range(n)} != expected for c in range(n)):
        return False
    for r0 in range(0, n, box_h):
        for c0 in range(0, n, box_w):
            values = {grid[r][c] for r in range(r0, r0 + box_h)
                      for c in range(c0, c0 + box_w)}
            if values != expected:
                return False
    return True

# Step 17: first type, 2 rows x 3 columns.
step17 = [
    [0,3,0,6,0,5], [1,0,0,3,0,0], [0,0,6,0,0,1],
    [0,0,0,0,0,0], [0,2,0,0,0,0], [5,0,0,4,2,0]
]
assert count_solutions(step17, 2, 3) == 1
assert count_solutions(step17, 3, 2) == 0

# Step 21 / Step 26: second type, 3 rows x 2 columns.
step21_26 = [
    [6,2,0,0,5,0], [0,0,0,0,2,0], [0,4,0,0,0,0],
    [5,0,0,0,1,0], [0,0,1,0,0,0], [4,0,3,0,0,0]
]
solution_second = [
    [6,2,4,3,5,1], [3,5,6,1,2,4], [1,4,5,2,3,6],
    [5,6,2,4,1,3], [2,3,1,6,4,5], [4,1,3,5,6,2]
]
assert valid_solution(solution_second, 3, 2)
assert not valid_solution(solution_second, 2, 3)
assert count_solutions(step21_26, 3, 2) == 1
# Cross-check: applying the first-type geometry does not preserve uniqueness.
assert count_solutions(step21_26, 2, 3) > 1

# Step 25: first type, 2 rows x 3 columns.
step25 = [
    [0,3,0,6,1,5], [1,0,0,3,4,2], [0,0,6,0,0,1],
    [0,0,0,0,0,0], [0,2,0,0,0,0], [5,0,0,4,2,0]
]
solution_first = [
    [4,3,2,6,1,5], [1,6,5,3,4,2], [2,4,6,5,3,1],
    [3,5,1,2,6,4], [6,2,4,1,5,3], [5,1,3,4,2,6]
]
assert valid_solution(solution_first, 2, 3)
assert count_solutions(step25, 2, 3) == 1

print("PASS: Step 17 first-type puzzle has one solution under 2x3 boxes.")
print("PASS: Step 21/26 second-type puzzle has one solution under 3x2 boxes.")
print("PASS: Step 21/26 supplied solution is invalid under 2x3 boxes.")
print("PASS: Step 25 first-type puzzle has one solution under 2x3 boxes.")
print("NOTE: Step 21/26 has", count_solutions(step21_26, 2, 3),
      "solutions under the first-type 2x3 geometry (not 3).")
