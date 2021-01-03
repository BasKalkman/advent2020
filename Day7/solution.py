import re

data = open('./input.txt').read().splitlines()

bag_rules = {}

for line in data:
    bag, bags = line.split('contain')
    bag = re.match(r'(\w+ \w+)', bag).group()
    bags_inside = re.findall(r'(\d+ \w+ \w+) bags?', bags)
    bag_rules[bag] = list()

    if bags_inside:
        for b in bags_inside:
            num, bn1, bn2 = b.split(' ')
            bagname = f'{bn1} {bn2}'
            bag_rules[bag].append({'type': bagname, 'num': int(num)})


def check_inside(bag, target):
    if len(bag_rules[bag]) == 0:
        return False

    target_inside = False

    for b in bag_rules[bag]:
        if b['type'] == target:
            target_inside = True
            break
        elif check_inside(b['type'], target) == True:
            target_inside = True

    return target_inside


part1 = 0
for bag in bag_rules.keys():
    if check_inside(bag, 'shiny gold'):
        part1 += 1

print(part1)
