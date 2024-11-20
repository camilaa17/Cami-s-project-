
# This function adds 2 numbers
def addNumbers( firstNumber, secondNumber):
    sum = firstNumber + secondNumber
    print( sum )

addNumbers( 7, 9 )
addNumbers( 2,4)

userFirstNumber = input("What's your first number:")
userSecondNumber = input("What's your second number:")

addNumbers( userFirstNumber, userSecondNumber )
# Defining a variable 'temperature'
temperature = 50.5
if temperature < 30:
    print("It's cold outside!")
elif temperature > 50:
    print("It's hot outside!")
          
#Creatiing  a for loop that iterates over a range of numbers from 0 to 4
for number in range (5):
    #printing the current value of 'number'
    print(f"current number is {number}")

#Creating a list of fruits
fruits_list = ["apple", "banana", "strawberry" ]
print(f"Fruits list: {fruits_list}")

second_fruit = fruits_list[1]
print(f"The second fruit in the list is {second_fruit}")

colora_tuple = ("red", "green", "blue")
print(f"Colors tuple: {colora_tuple}")


# Need At least 1 iterated list with accessed and used elements in it.
for eachColoraTuple in colora_tuple:
    print( eachColoraTuple )