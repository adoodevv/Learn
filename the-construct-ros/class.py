class Jedi:
    def __init__(self, name):
        self.jedi_name = name

    def say_hi(self):
        print('Hello, my name is ', self.jedi_name)
        
if __name__ == '__main__':

    j1 = Jedi('ObiWan')
    j1.say_hi()

    j2 = Jedi('Anakin')
    j2.say_hi()