def solution(board):
    answer = 0
    for i in range(len(board)):
        for j in range(len(board)):
            if board[i][j] == 1:
                for x in range(i-1,i+2):
                    for y in range(j-1,j+2):
                        try:
                            if board[x][y] != 1 and x>=0 and y>=0:
                                board[x][y] = 2
                            else:
                                pass
                        except:
                            pass
    for line in board:
        answer += line.count(0)
                   
    return answer