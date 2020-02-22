module.exports = {
  
  createInterface: jest.fn().mockReturnValue({
    question: jest.fn()
      .mockImplementation((questionText, cb) => { cb('Q') })
  }),

}