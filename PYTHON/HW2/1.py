print('1)написати функцію на замикання котра буде в собі зберігати список справ, вам потрібно реалізувати два методи')
def notebook():
    l =[]
    def add_todo(todo):
       nonlocal l
       l.append(todo)
    def get_all():
        nonlocal l
        print(l)
    return add_todo, get_all

add, get = notebook()
add('sss')
add('lll')
get()

print('#'*20)
print('2) протипізувати перше завдання')
def notebook_with_type():
    l: list[str] =[]
    def add_todo(todo: str):
       nonlocal l
       l.append(todo)
    def get_all():
        nonlocal l
        print(l)
    return add_todo, get_all

add1, get1 = notebook_with_type()
add('jjj') 
add('ddd')
get()

print('#'*20)
print('3) створити функцію котра буде повертати сумму розрядів числа у вигляді строки ')
def func(num: int) -> str:
    s = str(num)
    l = []
    for i, value in enumerate(s):
        if value != '0':
            l.append(value + "0"* (len(s) - i - 1))
    return '+'.join(i for i in l)      
print(func(2345))   

print('#'*20)
print('4) створити декоратор котрий буде підраховувати скільки разів була запущена функція продекорована цим декоратором')
def decorator(func):
    counter = 0
    def inner():
        nonlocal counter
        counter+=1
        func()
        result = 'function completed ' + str(counter) + ' times'
        print(result)
    return inner

@decorator
def decoratedFunk():
     print("done")

decoratedFunk()
decoratedFunk()
decoratedFunk()
decoratedFunk()