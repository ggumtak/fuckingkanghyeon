import os
import re

data_dir = r'c:\Users\percy\Downloads\testpractice-main\quizzes\database\data'
counts = {}

for filename in os.listdir(data_dir):
    if filename.startswith('set') and filename.endswith('.js'):
        filepath = os.path.join(data_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Count question objects by looking for id: patterns with both quote types
        # Pattern 1: { id: "..." or { id: '...'
        # Pattern 2: { "id": "..." 
        count1 = len(re.findall(r'\{\s*id:\s*["\']', content))
        count2 = len(re.findall(r'\{\s*"id":\s*["\']', content))
        question_count = count1 + count2
        set_num = filename.replace('set', '').replace('.js', '')
        counts[set_num] = question_count

# Sort by set number
for key in sorted(counts.keys(), key=lambda x: int(x)):
    print(f'set{key}: {counts[key]}')
