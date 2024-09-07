const TRANSACTION_API_URL = 'https://example.com/api/v1/transactions';
const NEXT_PUBLIC_API_TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjgyMjA0NjUsImlhdCI6MTcyNTYyODQ2NSwibmJmIjoxNzI1NjI4NDY1LCJzdWIiOiI4NTNlYmE4NS05NjBhLTQ3ODUtYTVhZS1mYjQ4ZTExNTk5OWYifQ.3aZRpZeRrm8v372JYbXJ2mjTyNWQ9cyxi8BUl36NqmKGnoPnqnEI41ZI1vmOWXbdYLEzxOucQjXrtk2uMcNGrQ';

export const createTransaction = async (
  transactionData: { payment_id: number; gross_amount: number }
) => {
  try {
    const response = await fetch(TRANSACTION_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${NEXT_PUBLIC_API_TOKEN}`,
      },
      body: JSON.stringify(transactionData),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating transaction:', (error as Error).message);
    throw error;
  }
};

export const getTransaction = async (transactionId: string) => {
  try {
    const response = await fetch(`${TRANSACTION_API_URL}/${transactionId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${NEXT_PUBLIC_API_TOKEN}`,
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching transaction:', (error as Error).message);
    throw error;
  }
};

export const completeTransaction = async (transactionId: string) => {
  try {
    const response = await fetch(`${TRANSACTION_API_URL}/${transactionId}/complete`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${NEXT_PUBLIC_API_TOKEN}`,
      },
      body: JSON.stringify({}), 
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error completing transaction:', (error as Error).message);
    throw error;
  }
};
