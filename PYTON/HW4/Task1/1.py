#1) Є ось такий файл... ваша задача записати в новий файл 
# тільки email'ли з доменом gmail.com (Хеш то що з ліва записувати не потрібно)
emails = []
try:
    with open('Task1/emails.txt', 'r') as file:
        while read := file.readline():
            parts = read.split('\t')
            new_parts = parts[3].split('@')
            if 'gmail.com' in new_parts[1]:
                emails.append(parts[3])
except Exception as err:
    print(err)
        
try:
    with open('Task1/newEmails.txt', 'w') as file:
        file.writelines(emails)
except Exception as err:
    print(err)        