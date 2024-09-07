const NEXT_PUBLIC_API_TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjgyMjA0NjUsImlhdCI6MTcyNTYyODQ2NSwibmJmIjoxNzI1NjI4NDY1LCJzdWIiOiI4NTNlYmE4NS05NjBhLTQ3ODUtYTVhZS1mYjQ4ZTExNTk5OWYifQ.3aZRpZeRrm8v372JYbXJ2mjTyNWQ9cyxi8BUl36NqmKGnoPnqnEI41ZI1vmOWXbdYLEzxOucQjXrtk2uMcNGrQ';
const PAYMENT_API_URL = 'https://zenspire-f5ec6.et.r.appspot.com/api/v1';

// Fungsi untuk mendapatkan daftar pembayaran
export const getPaymentList = async () => {
  console.log(PAYMENT_API_URL);
  try {
    const response = await fetch(`${PAYMENT_API_URL}/payments`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      'Error fetching payment list:',
      (error as Error).message
    );
    throw error;
  }
};

// saran pembayaran
export const getPaymentSuggest = async () => {
  try {
    const response = await fetch(`${PAYMENT_API_URL}/payments/suggest`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${NEXT_PUBLIC_API_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      'Error fetching payment suggest:',
      (error as Error).message
    );
    throw error;
  }
};
