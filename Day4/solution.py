import re

passports = [x.replace('\n', ' ')
             for x in open('./input.txt').read().split('\n\n')]

required_fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

# Part 1
valid_passport_count = 0
for passport in passports:
    fields = {}
    for field in re.findall('(.{3}):', passport):
        fields[field] = 1

    valid = True
    for req_field in required_fields:
        if req_field not in fields:
            valid = False
            break

    if valid:
        valid_passport_count += 1

print(f'Part 1: {valid_passport_count}')
