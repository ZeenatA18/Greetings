describe("Greet function", function () {


    it("Should greet the name that was entered and greet with the language selected", function () {
        const greeting = Greetings()
       
        assert.equal("Hello, Joe", greeting.greet("Joe", "eng"));

    })

    it("Should store the names entered into empty array", function () {
        const greeting = Greetings()

        greeting.setNames('fdfd')
        assert.deepEqual(['fdfd'], greeting.getNames());

    })



    it("Should get the length of the names stored", function () {
        const greeting = Greetings()

        greeting.setNames('zee')
        greeting.setNames('mako')
  
          assert.equal(2, greeting.nameCount());
  
      })

   

})
