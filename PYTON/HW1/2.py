# 1)Дан list:
#   list = [22, 3,5,2,8,2,-23, 8,23,5]
#   - знайти мін число
#   - видалити усі дублікати
#   - замінити кожне 4-те значення на 'X'
# 2) вивести на екран пустий квадрат з "*" сторона якого вказана як агрумент функції
# 3) вывести табличку множення за допомогою цикла while
# 4) переробити це завдання під меню
list1 = [22, 3,5,2,8,2,-23, 8,23,5]
def Find_min():
    print(min(list1))
def delete_dupl():
    s = set(list1)
    l = list(s)
    print(l)
def replaceX():
    i = 0
    new_list = []
    for el in list1:
        i+=1
        if i % 4 == 0:
            new_list.append('X')
        else:
            new_list.append(el)    
    print(new_list)
def print_square(a:int):
    print('*'*a)
    for i in range(a-1):
        inside = " "*(a-2)
        print('*' + inside + "*")
    print('*'*a)    
def multi_table():
    i = 1
    while i <= 10:
        j = 1
        while j <= 10:
            print(i*j) 
            j+=1   
        i+=1
        
print("To fond Min from list press 1")
print("To delete duplicates press 2")
print("To replace every 4th on X press 3")
print("To get square press 4")
print("multiplication table press 5")

inp = input("Enter what u need: ")
match inp:
    case "1":
        Find_min()
    case "2":
        delete_dupl()
    case "3":
        replaceX()
    case "4":
        a = int(input("Enter side: "))
        print_square(a)
    case "5":
        multi_table()