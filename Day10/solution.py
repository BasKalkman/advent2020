data = sorted([int(x) for x in open('./input.txt').read().splitlines()])
data = [0] + data
data.append(data[-1] + 3)

ones = 0
threes = 0
for i in range(len(data)-1):
    if data[i+1] - data[i] == 3:
        threes += 1
    elif data[i+1] - data[i] == 1:
        ones += 1

print(f'Part 1: {ones * threes}')
