# 1)написати прогу яка вибирає зі введеної строки цифри і виводить їх через кому,
# наприклад:
str = 'djhhs7593jdji320f4kdk9'
newStr = [i for i in str if i.isdigit() ]
print('прогa яка вибирає зі введеної строки цифри і виводить їх через кому')
print(str)
print(','.join(newStr))
print('##########################')


# # # 2)написати прогу яка вибирає зі введеної строки числа і виводить їх
# # # так як вони написані
str2 = 'djhhs7593jdji320f4kdk9'
current_number = ""
numbers_found = []
for char in str2:
    if char.isdigit():
        current_number += char
    elif current_number:
        numbers_found.append(current_number)
        current_number = ""
if current_number:
    numbers_found.append(current_number)
if numbers_found:
    result = ', '.join(numbers_found)
    print('прогa яка вибирає зі введеної строки числа і виводить їх так як вони написані')
    print(str2)
    print(result)
    print('##########################')

# записати кожний символ як окремий елемент списку і зробити його заглавним:
str3 = 'Hello Okten'
newStr = [i.upper() for i in str3]
print('записати кожний символ як окремий елемент списку і зробити його заглавним')
print(str3)
print(newStr)
print('##########################')


#з диапозону від 0-50 записати тільки не парні числа при цьому піднести їх до квадрату
range = [i*i for i in range(50) if i % 2 ==0]
print('з диапозону від 0-50 записати тільки не парні числа при цьому піднести їх до квадрату')
print(range)
print('##########################')

#створити функцію яка виводить ліст
def Print_Func(list):
   print('створити функцію яка виводить ліст')
   print(list)
   for i in list:
     print(i)
   print('##########################')
Print_Func([1,2,3,4,5])

#створити функцію яка приймає три числа та виводить та повертає найбільше.
def Return_Max(a,b,c):
    print ('створити функцію яка приймає три числа та виводить та повертає найбільше.')
    print(a, b, c)
    max_num = max(a, b, c)

    return max_num
print('Max Num:', Return_Max(5, 7, 3))
print('##########################')

#створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
def Return_Min_Print_Max(*args):
    print('створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше')
    print(args)
    minNum = min(args)
    maxNum = max(args)
    print(minNum)
    return maxNum
print('Return min',Return_Min_Print_Max(4, 6, 7, 2 , 5, 4, 1, 9))
print('##########################')


#створити функцію яка повертає найбільше число з ліста
def Max_From_List(list):
    print('створити функцію яка повертає найбільше число з ліста')
    print(list)
    return (max(list))
print(Max_From_List([3, 6, 5, 7]))
print('##########################')

#створити функцію яка повертає найменьше число з ліста
def Min_From_List(list):
    print('створити функцію яка повертає найменьше число з ліста')
    print(list)
    return (min(list))
print(Min_From_List([3, 6, 5, 7]))
print('##########################')


#створити функцію яка приймає ліст чисел та складає значення елементів ліста та повертає його.
def List_Sum(l):
    print('створити функцію яка приймає ліст чисел та складає значення елементів ліста та повертає його')
    print(l)
    sum = 0
    for i in l:
        sum+=i
    return sum
print(List_Sum([5,10,15]))
print('##########################')

#створити функцію яка приймає ліст чисел та повертає середнє арифметичне його значень.

def Arithmetic_mean(l):
    print('створити функцію яка приймає ліст чисел та повертає середнє арифметичне його значень.')
    print(l)
    sum = 0
    for i in l:
        sum += i
    return sum/len(l)
print(Arithmetic_mean([4, 7, 5, 3, 6]))
print('##########################')
# 1)Дан list:
#  list1 = [22, 3,5,2,8,2,-23, 8,23,5]
#   - знайти мін число
#   - видалити усі дублікати
#   - замінити кожне 4-те значення на 'X'
list1 = [22, 3,5,2,8,2,-23, 8,23,5]
def foo(l):
    print(l)
    # print (min(l))
    l = list(set(l))
    print(l)
    for i in l:
        if l.index(i)-1 % 4 == 0:
            print(i)




foo([4, 6, 4, 2, 4, 2, 1, 4, 5, 2, 7, 10, 20, 30 , 40 , 50])