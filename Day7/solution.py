import re

data = open('./input.txt').read().splitlines()

bag_rules = {}

for line in data:
    bag, bags = line.split('contain')
    bag = re.match(r'(\w+ \w+)', bag).group()
    bags_inside = re.findall(r'(\d+ \w+ \w+) bags?', bags)
    bag_rules[bag] = []

    if bags_inside:
        for b in bags_inside:
            num, bn1, bn2 = b.split(' ')
            bagname = f'{bn1} {bn2}'
            bag_rules[bag].append({'type': bagname, 'num': int(num)})


def check_inside(bag, target):
    for b in bag_rules[bag]:
        if b['type'] == target:
            return 1
        else:
            check_inside(b['type'], target)
    return 0


part1 = 0
for bag in bag_rules:
    part1 += check_inside(bag, 'shiny gold')

print(part1)
