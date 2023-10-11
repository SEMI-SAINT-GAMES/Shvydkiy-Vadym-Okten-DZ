# 2) Створити записну книжку покупок:
# - у покупки повинна бути id, назва і ціна
# - всі покупки зберігаємо в файлі
# з функціоналу:
#  * вивід всіх покупок
#  * має бути змога додавати покупку в книгу
# * має бути змога шукати по будь якому полю покупку
# * має бути змога показати найдорожчу покупку
# * має бути можливість видаляти покупку по id
# (ну і меню на це все)



# class Book:
#     def __init__(self) -> None:
#         self.__menu()
   
#     def __menu(self):
#         print("         MENU")
#         print("For get all press 1")
#         print("For add item press 2")
#         print("For find item by ID press 3")
#         print("For find item by NAME press 4")
#         print("For find item by PRICE press 5")
#         print("For find most expencive item press 6")
#         print("For delete item by ID press 7")
#         print("For exit press 0")
#         n = input("Enter what you need: ")
#         match n:
#             case "1":
#                for item in self.__get_all():
#                    print(item)
#             case "2":
#                 self.__add_item()
#             case "3":
#                 self.__find_file_by_params(1)
#             case "4":
#                 self.__find_file_by_params(2)
#             case "5":
#                 self.__find_file_by_params(3)   
#             case "6":
#                 self.__get_most_expencive()     
#     def __get_all(self):
#         try:
#             with open('Task2/Book.txt', 'r') as file:
#                 l = file.readlines()
#                 return l
        
                
#         except Exception as err:
#             print(err) 
#         self.__menu()            
    
#     def __add_item(self):
#         ids = [] 
#         print(len(self.__get_all()))
#         if len(self.__get_all()) != 0:
#             for i in self.__get_all():
#                 ids.append(int(i.split(" ")[0]))
#             self.item_id = max(ids) + 1
#         else:
#             self.item_id = 0 
#         self.name = input('Enter name: ')
#         self.price = input('Enter price: ')
#         item = str(self.item_id) + " " + self.name + " " + self.price + "\n"
#         try:
#             with open('Task2/Book.txt', 'a') as file:
#                 file.write(item)
                
#         except Exception as err:
#             print(err) 
#         print("Congratulations, " + self.name + "is added to the book")    
#         self.__menu()      
    
    
    
    # def __find_file_by_params(self, param_type):
    #     items = self.__get_all()
    #     split_items = []
    #     for item in items:
    #         new_item = item.split(' ')
    #         split_items.append(new_item)
    #     match param_type:
    #         case 1:
    #             item_id = input("Enter id of item: ")
    #             for item in split_items:
    #                 if item_id == item[0]:
    #                     print(item[1] + " " + item[2])
    #             self.__menu()  
    #         case 2:
    #             name = input("Enter name of item: ")
    #             for item in split_items:
                    
    #                 if name == item[1]:
    #                     print(item[1] + " " + item[2])
    #             self.__menu()       
    #         case 3:
    #             price = input("Enter price of item: ")
                
    #             for item in split_items:
    #                 if price + "\n" == item[2]:
    #                     print(item[1] + " " + item[2])
    #             self.__menu()        
                    
    # def __get_most_expencive(self):
    #     items = self.__get_all()
    #     split_items = []
    #     for item in items:
    #         new_item = item.split(' ')
    #         split_items.append(new_item)
    #     prices = []
    #     for item in split_items:
            
    #         prices.append(int(item[2][:-1]))
    #     print(max(prices, key=abs))

# Book()  
import json
class Book:
    def __init__(self) -> None:
        self.__items = []
        self.__get_all()
        self.__menu()
    
    def __menu(self):
        print("         MENU")
        print("For get all press 1")
        print("For add item press 2")
        print("For find item by ID press 3")
        print("For find item by NAME press 4")
        print("For find item by PRICE press 5")
        print("For find most expencive item press 6")
        print("For delete item by ID press 7")
        n = input("Enter what you need: ")
        match n:
            case "1":
               for item in self.__items:
                   print(f"id:{item['id']}, name: {item['name']}, price: {item['price']}")
            case "2":
                self.__add_item()
            case "3":
                self.__find_item_by_params(1)
            case "4":
                self.__find_item_by_params(2)
            case "5":
                self.__find_item_by_params(3)   
            case "6":
                self.__get_most_expencive()
            case "7":
                self.__remove_by_id()         

    def __get_all(self):
        try:
            with open("Task2/book.json") as file:
               self.__items = json.load(file)
        except Exception as err:
            print(err)
        self.__menu() 
    
    
    def __add_item(self):
        items = []
        self.name = input('Enter name: ')
        self.price = int(input('Enter price: '))
        if len(self.__items) != 0:
            self.item_id = self.__items[-1]['id'] + 1
        else:
             self.item_id = 0
        item = {'id': self.item_id, 'name': self.name, 'price': self.price}
        
        self.__items.append(item)
        try:
            with open("Task2/book.json", "w") as file:
                json.dump(self.__items, file)
        except Exception as err:
            print(err)
        self.__menu() 
        
    def __find_item_by_params(self, param_type):
        
        match param_type:
            case 1:
                id = int(input("Enter item id: "))
                found_items = []
                for item in self.__items:
                    if id == item['id']:
                        print(item)
                        found_items.append(item)
                if len(found_items) == 0:
                    print('No items found') 
                self.__menu() 
            case 2:
                name = input("Enter name of item: ")
                found_items = []
                for item in self.__items:
                    if name in item['name']:
                        print(item)
                        found_items.append(item)
                if len(found_items) == 0:
                    print('No items found')        
                self.__menu()       
            case 3:
                price = int(input("Enter price of item: "))
                found_items = []
                for item in self.__items:
                    if price  == item['price']:
                        print(item)
                        found_items.append(item)
                if len(found_items) == 0:
                    print('No items found') 
                self.__menu() 
    def __get_most_expencive(self):
        print(max(self.__items, key=lambda x: x['price']))
        self.__menu()
             
    def __remove_by_id(self):
        item_id = int(input("Enter id of item you want to remove: "))
        del self.__items[item_id]
        try:
            with open("Task2/book.json", "w") as file:
                json.dump(self.__items, file)
        except Exception as err:
            print(err)
        print('Done')
        self.__menu()
                
Book()