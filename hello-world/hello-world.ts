class HelloWorld {
    static hello(name: String = ''):String {
        // Your code here
        if (name == '') {
            return 'Hello, World!';
        } else {
            return 'Hello, ' + name + '!';
        }
    }
}

export default HelloWorld
