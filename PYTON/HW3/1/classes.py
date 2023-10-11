# Створити клас Rectangle:
# -він має приймати дві сторони x,y
# -описати поведінку на арифметични методи:
#   + сумма площин двох екземплярів ксласу
#   - різниця площин двох екземплярів ксласу
#   == площин на рівність
#   != площин на не рівність
#   >, < меньше більше
#   при виклику метода len() підраховувати сумму сторін

class Rectangle:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __add__(self, other):
        return self.y * self.x + other.y * other.x
    def __sub__(self, other):
        return self.y * self.x - other.y * other.x
    def __eq__(self, other):
        return self.y * self.x == other.y * other.x
    def __ne__(self, other):
        return self.y * self.x != other.y * other.x
    def __lt__(self, other):
        return self.y * self.x > other.y * other.x
    def __gt__(self, other):
        return self.y * self.x < other.y * other.x
    def __len__(self):
        return (self.x + self.y) * 2
    
rectangle1 = Rectangle(3, 6)
rectangle2 = Rectangle(4, 8)   

print(rectangle1 + rectangle2)
print(rectangle1 - rectangle2)
print(rectangle1 == rectangle2)
print(rectangle1 != rectangle2)
print(rectangle1 < rectangle2)
print(rectangle1 > rectangle2)
print(len(rectangle1))
print(len(rectangle2))
print('#'*20)
# створити класс Human (name, age)
# створити два класси Prince и Cinderella які наслідуються від Human:
# у попелюшки мае бути ім'я, вік, розмір нонги
# у принца має бути ім'я, вік, та розмір знайденого черевичка, а також метод котрий буде приймати список попелюшок, та шукати ту саму

# в класі попелюшки має бути count який буде зберігати кількість створених екземплярів классу
# також має бути метод классу який буде виводити це значення

class Human:
    def __init__(self, name, age) -> None:
        self.name = name
        self.age = age

class Prince(Human):
    def __init__(self, name, age, shoe_size) -> None:
        super().__init__(name, age)
        self.shoe_size = shoe_size
    def find_cin(self, cinds):
        for cin in cinds:
            if cin.foot_size == self.shoe_size:
                print(self.name + " married with " + cin.name)
            else:
                print(self.name + " don`t like " + cin.name)    

        
class Cinderella(Human):
    count = 0
    def __init__(self, name, age, foot_size) -> None:
        super().__init__(name, age)
        self.foot_size = foot_size
        Cinderella.count += 1
    def info(self):
        print(self.name)
        print(self.age)
        print(self.foot_size)    

cin1 = Cinderella('Arnolda', 17, 28)
cin2 = Cinderella('Percifona', 14, 24)
cin3 = Cinderella('Alice', 18, 21)
cin4 = Cinderella('Fiona', 10, 23)

cinderellas = [cin1, cin2, cin3, cin4]

pr1 = Prince('Arnold', 19, 28)
pr1.find_cin(cinderellas)

print(cin4.count)
cin1.info()
print('#'*20)
# 1) Створити абстрактний клас Printable який буде описувати абстрактний метод print()
# 2) Створити класи Book та Magazine в кожного в конструкторі змінна name, та який наслідуются від класу Printable
# 3) Створити клас Main в якому буде:
# - змінна класу printable_list яка буде зберігати книжки та журнали
# - метод add за допомогою якого можна додавати екземпляри класів в список і робити перевірку чи то що передають є класом Book або Magazine инакше ігрнорувати додавання
# - метод show_all_magazines який буде виводити всі журнали викликаючи метод print абстрактного классу
# - метод show_all_books який буде виводити всі книги викликаючи метод print абстрактного классу
from abc import abstractmethod
class Printable:
    def __init__(self, name) -> None:
        self.name = name 
class Book(Printable):
    @abstractmethod
    def print(self):
       print(self.name)
class Magazine(Printable):
    @abstractmethod
    def print(self):
       print(self.name)
class Main:
    printable_list = []
    @classmethod
    def add(cls, prntbl):
        if isinstance(prntbl, Printable):
            cls.printable_list.append(prntbl)
    @classmethod
    def show_all_magazines(cls):
        magazine_list = []
        for mag in cls.printable_list:
            if isinstance(mag, Magazine):
                magazine_list.append(mag.name)
        print(magazine_list)        
    @classmethod
    def show_all_books(cls):
        book_list = []
        for book in cls.printable_list:
            if isinstance(book, Book):
                book_list.append(book.name)
        print(book_list)         



book1 = Book('Harry Potter')
book2 = Book('It')
magazine1 = Magazine('Forbes')
magazine2 = Magazine('Cosmopolitan')
Main.add(book1)
Main.add(book2)
Main.add(magazine1)
Main.add(magazine2)
Main.show_all_magazines()
Main.show_all_books()

