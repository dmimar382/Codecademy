const createEnvelopeButton = document.getElementById("create-envelope")
const envelopeList = document.getElementById("envelopes-list")
const spendMoneyButton = document.getElementById("spend-money")
const envelopeError = document.getElementById("error-message")
const deleteEnvelopeButton = document.getElementById("delete-envelope")
const selectElement = document.getElementById("spend-envelope-select");
const deleteElement = document.getElementById("delete-envelope-select");
// var envelopes = []

const resetEnvelopes = () => {
    envelopeList.innerHTML = '';
    selectElement.innerHTML = '';
    deleteElement.innerHTML ='';
  }

const renderError = response => {
    envelopeList.innerHTML = `<p>Your request returned an error from the server: </p>
  <p>Code: ${response.status}</p>
  <p>${response.statusText}</p>`;
  }

const updateEnvelopes = ()=>{
    resetEnvelopes();

    fetch('/api/envelopes')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }
    })
    .then((data) => {
      // Update your front-end table or component with the retrieved data
    //   renderEnvelopesTable(data);


    if (data.length > 0) {
        data.forEach(envelope => {
        const newEnvelope = document.createElement('div');
        newEnvelope.innerHTML = `
        <div class="envelope-entry">
            <span class="envelope-name"><strong>${envelope.name}</strong></span>
            <span class="envelope-name-balance" style="text-align:right">$${envelope.balance}</span>
        </div>
        `
        envelopeList.appendChild(newEnvelope);

        updateSpendField(envelope.name);
        updateDeleteField(envelope.name);
        });
    }else {
        envelopeList.innerHTML = '<p>Your request returned no envelopes.</p>';
     }
    })
    .catch((error) => {
      console.error('Error updating the table:', error);
    });



}

const updateSpendField = (name) =>{
    // Update the <select> element with the new options
    
    const option = document.createElement("option");
    option.text = name;
    selectElement.appendChild(option);
}

const updateDeleteField = (name) =>{
    // Update the <select> element with the new options
    
    const option = document.createElement("option");
    option.text = name;
    deleteElement.appendChild(option);
}

// add handling for errors to be displayed 
spendMoneyButton.addEventListener('click', (event)=>{
    event.preventDefault();
    var name = document.getElementById('spend-envelope-select').value
    var spendAmount = document.getElementById('spend-amount').value

    fetch(`/api/envelopes?name=${name}&amount=${spendAmount}`,{method: "PUT"})
    .then(response => response.json())
    .then(response=>{
        updateEnvelopes()
        document.getElementById("spend-amount").value = "";
    })
})

createEnvelopeButton.addEventListener('click', (event)=>{
    event.preventDefault(); 
    
    var name =  document.getElementById("envelope-name").value
    var balance = document.getElementById("envelope-balance").value
    // console.log(`Name is:${name}, Balance is ${balance}`)
    fetch(`/api/envelopes?name=${name}&balance=${balance}`,{method: "POST"})
    .then(response => response.json())
    .then((response) => {
        updateEnvelopes()

         // Clear the input fields
         document.getElementById("envelope-name").value = "";
         document.getElementById("envelope-balance").value = "";
      });
})

deleteEnvelopeButton.addEventListener('click', (event)=>{
    event.preventDefault(); 
    var name =  document.getElementById("delete-envelope-select").value;
    fetch(`/api/envelopes?name=${name}`,{method: "DELETE"})
    .then(response => response.json())
    .then((response) => {
        console.log("DELETED")
        updateEnvelopes()
      });
})