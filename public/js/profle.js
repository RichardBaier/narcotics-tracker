//Add New Allergy
const addAllergy = async (event) => {
  event.preventDefault();

  const allergy = document.querySelector('#allergy-add').value.trim();

  if (allergy) {
    const response = await fetch('/api/allergies', {
      method: 'POST',
      body: JSON.stringify({ allergy }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/allergies');
    } else {
      alert('Failed to add allergy');
    }
  }
};
document.querySelector('.addButton').addEventListener('Submit', addAllergy);

//Add New Condition
const addCondition = async (event) => {
  event.preventDefault();

  const condition = document.querySelector('#condition-add').value.trim();

  if (condition) {
    const response = await fetch('/api/conditions', {
      method: 'POST',
      body: JSON.stringify({ condition }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/conditions');
    } else {
      alert('Failed to add condition');
    }
  }
};

document.querySelector('.addButton').addEventListener('Submit', addCondition);

//Add New Drug
const addDrug = async (event) => {
  event.preventDefault();

  const drug = document.querySelector('#drug-add').value.trim();

  if (drug) {
    const response = await fetch('/api/drugs', {
      method: 'POST',
      body: JSON.stringify({ drug }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/drugs');
    } else {
      alert('Failed to add drug');
    }
  }
};

document.querySelector('.addButton').addEventListener('Submit', addDrug);

//Add New Surgery
const addSurgery = async (event) => {
  event.preventDefault();

  const surgery = document.querySelector('#surgery-add').value.trim();

  if (surgery) {
    const response = await fetch('/api/surgeries', {
      method: 'POST',
      body: JSON.stringify({ surgery }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/surgeries');
    } else {
      alert('Failed to add surgery');
    }
  }
};

document.querySelector('.addButton').addEventListener('Submit', addSurgery);
