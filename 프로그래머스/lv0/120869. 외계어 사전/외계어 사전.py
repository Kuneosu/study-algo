def solution(spell, dic):
    spell = sorted(spell)
    for word in dic:
        if sorted(list(word)) == spell:
            return 1
    return 2