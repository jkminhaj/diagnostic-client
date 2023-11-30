import { Container, TextField, Button, Typography, Paper } from '@mui/material';

const ContactUs = () => {
  return (
    <Paper className=" py-16">
      <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Paper className="bg-white p-10 rounded-md w-full md:w-2/3 border lg:w-1/2">
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Contact Us
          </Typography>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Your Name
              </label>
              <TextField
                type="text"
                id="name"
                name="name"
                fullWidth
                variant="outlined"
                margin="normal"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Your Email
              </label>
              <TextField
                type="email"
                id="email"
                name="email"
                fullWidth
                variant="outlined"
                margin="normal"
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Message
              </label>
              <TextField
                id="message"
                name="message"
                multiline
                rows={4}
                fullWidth
                variant="outlined"
                margin="normal"
                placeholder="Type your message here..."
                required
              />
            </div>
            <div className="text-center">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ '&:hover': { backgroundColor: '#0069d9' } }}
              >
                Send Message
              </Button>
            </div>
          </form>
        </Paper>
      </Container>
    </Paper>
  );
};

export default ContactUs;
