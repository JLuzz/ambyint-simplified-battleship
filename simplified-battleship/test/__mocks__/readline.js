module.exports = {
  
  createInterface: jest.fn().mockReturnValue({
    question: jest.fn()
      .mockImplementationOnce((questionText, cb) => { cb('A3 A5') })
      .mockImplementationOnce((questionText, cb) => { cb('A3 A5') })
      .mockImplementationOnce((questionText, cb) => { cb('Q') })
  }),

}