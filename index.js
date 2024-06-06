const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');
const description = document.querySelector('.description');



toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});


 // Add a class to the description div when scrolling starts
 
document.addEventListener('scroll', () => {
   
    description.classList.add('show');
    description.classList.add('about');
    description.classList.add('contact');

    
});



let currentPanelIndex = 0;
const panels = document.querySelectorAll('.panel');
const totalPanels = panels.length;

// Function to show only the first 5 panels initially
function showInitialPanels() {
    for (let i = 0; i < totalPanels; i++) {
        if (i < 5) {
            panels[i].style.display = 'block';
        } else {
            panels[i].style.display = 'none';
        }
    }
}

function showPanel(index) {
    panels.forEach((panel, i) => {
        panel.classList.remove('active');
        if (i === index) {
            panel.classList.add('active');
        }
    });
}

function nextPanel() {
    // Check if the current panel has 'last', 'last2', or 'last3' class
    const isLastActive = panels[currentPanelIndex].classList.contains('last');
    const isLast2Active = panels[currentPanelIndex].classList.contains('last2');
    const isLast3Active = panels[currentPanelIndex].classList.contains('last3');

    // Update the currentPanelIndex
    currentPanelIndex = (currentPanelIndex + 1) % totalPanels;

    // If the current panel has 'last', 'last2', or 'last3' class, show the first set of panels
    if (isLast3Active) {
        showFirstSetOfPanels();
    } else if (isLast2Active) {
        showLast2Panels();
    } else if (isLastActive) {
        showNextSetOfPanels();
    } else {
        showPanel(currentPanelIndex);
    }
}



function showFirstSetOfPanels() {
    // Set the class 'active' to the first panel
    currentPanelIndex = 0;
    
    // Check if the last2 panel is already active
    const isLast2Active = panels[currentPanelIndex].classList.contains('last2');
    
    for (let i = 0; i < 5; i++) {
        const newIndex = (currentPanelIndex + i) % totalPanels;
        panels[newIndex].style.display = 'block';
    }
    
    if (!isLast2Active) {
        // Show only the first set of panels if not on last2 active
        for (let i = 5; i < totalPanels; i++) {
            panels[i].style.display = 'none';
        }
    }
    
    showPanel(currentPanelIndex);
}

function showNextSetOfPanels() {
    // Hide all panels initially
    panels.forEach(panel => {
        panel.style.display = 'none';
    });

    // Get the index of the panel with the class 'last'
    const lastPanelIndex = Array.from(panels).findIndex(panel => panel.classList.contains('last'));

    // Update the order of the panels and show them
    for (let i = 0; i < 5; i++) {
        const newIndex = (lastPanelIndex + i + 1) % totalPanels;
        panels[newIndex].style.display = 'block';
    }

    // Find the new active panel index (the first panel from the new set)
    const newActiveIndex = (lastPanelIndex + 1) % totalPanels;
    showPanel(newActiveIndex);
}

function showLast2Panels() {
    // Hide all panels initially
    panels.forEach(panel => {
        panel.style.display = 'none';
    });

    // Get the index of the panel with the class 'last13'
    const last2PanelIndex = Array.from(panels).findIndex(panel => panel.classList.contains('last13'));

    // Update the order of the panels and show them
    for (let i = 0; i < 2; i++) {
        const newIndex = (last2PanelIndex + i) % totalPanels;
        panels[newIndex].style.display = 'block';
    }

    // Find the new active panel index (the first panel from the new set)
    const newActiveIndex = (last2PanelIndex) % totalPanels;
    showPanel(newActiveIndex);
}


function prevPanel(){

    const isFirstActive = panels[currentPanelIndex].classList.contains('first');
    const isFirst2Active = panels[currentPanelIndex].classList.contains('first2');
    const isFirst3Active = panels[currentPanelIndex].classList.contains('first3');

    if (isFirstActive) {
        showLast2Panels();
        // Find the panel with 'last3' class and set it as active
        const last3PanelIndex = Array.from(panels).findIndex(panel => panel.classList.contains('last3'));
        if (last3PanelIndex !== -1) {
            currentPanelIndex = last3PanelIndex;
            showPanel(currentPanelIndex);
        }
    } 
    // If on the first panel of last2 panels, go to the last panel of next set of panels
    else if (isFirst3Active) {
        showNextSetOfPanels();
        currentPanelIndex = totalPanels - 1;
        showPanel(currentPanelIndex);
        // Find the panel with 'last2' class and set it as active
        const last2PanelIndex = Array.from(panels).findIndex(panel => panel.classList.contains('last2'));
        if (last2PanelIndex !== -1) {
            currentPanelIndex = last2PanelIndex;
            showPanel(currentPanelIndex);
        }
    }   else if (isFirst2Active) {
        showFirstSetOfPanels();
        currentPanelIndex = totalPanels - 1;
        showPanel(currentPanelIndex);
        const last2PanelIndex = Array.from(panels).findIndex(panel => panel.classList.contains('last'));
        if (last2PanelIndex !== -1) {
            currentPanelIndex = last2PanelIndex;
            showPanel(currentPanelIndex);
        }
    }
    // Otherwise, just move to the previous panel
    else {
        currentPanelIndex = (currentPanelIndex - 1 + totalPanels) % totalPanels;
        showPanel(currentPanelIndex);
    }
   
  
    
}



document.addEventListener('DOMContentLoaded', () => {
    // Initial display of the first panel
    showInitialPanels();

    // Add click event listeners to panels
    panels.forEach((panel, i) => {
        panel.addEventListener('click', () => {
            currentPanelIndex = i;
            showPanel(currentPanelIndex);
        });
    });

    // Initially set the first panel as active
    showPanel(currentPanelIndex);


    const qCategory = document.getElementById('qCategory');
    qCategory.addEventListener('click', () => {
        // Trigger the nextPanel function when SUV is clicked
        showNextSetOfPanels();
    });


    const aCategory = document.getElementById('aCategory');
    aCategory.addEventListener('click', () => {
        // Trigger the nextPanel function when SUV is clicked
        showFirstSetOfPanels();
    });

  
    
        const EtronCategory = document.getElementById('EtronCategory');
        EtronCategory.addEventListener('click', () => {
            // Trigger a function to display the last 2 panels
            showLast2Panels();
        });
    });
    





function scrollToModels() {
    document.getElementById('models').scrollIntoView({ behavior: 'smooth' });
}

function scrollToAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}


function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}






function sendMessage() {
    // Get the value of the username and message
    const username = document.getElementById('username').value;
    const message = document.getElementById('message').value;

    // Display the sent message
    const sentMessage = document.getElementById('sentMessage');
    sentMessage.style.display = 'block';

    // Clear the textarea
    document.getElementById('message').value = '';

    // Clear the username input field
    document.getElementById('username').value = '';

    // Hide the sent message after 3 seconds
    setTimeout(function() {
        sentMessage.style.display = 'none';
    }, 3000);
}


panels.forEach((panel, i) => {
    panel.addEventListener('click', () => {
        const isActive = panel.classList.contains('active');
        if (isActive) {
            // Panel is already active, show additional info when hovered over
            panel.addEventListener('mouseenter', () => {
                // Display additional info when mouse enters the panel
                panel.querySelector('figcaption').classList.add('show-info');
            });

            panel.addEventListener('mouseleave', () => {
                // Hide additional info when mouse leaves the panel
                panel.querySelector('figcaption').classList.remove('show-info');
            });
        } else {
            currentPanelIndex = i;
            showPanel(currentPanelIndex);
        }
    });
});


const form = document.getElementById('contact-form');
const sentMessage = document.getElementById('sentMessage');

// Add submit event listener to the form
form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Clear the textarea for the message
    document.getElementById('the-message').value = '';

    // Display the "Message Sent!" message
    sentMessage.style.display = 'block';

    // Hide the "Message Sent!" message after 3 seconds
    setTimeout(function() {
        sentMessage.style.display = 'none';
    }, 3000);
});


function changeDescription() {
    var descriptions = document.querySelectorAll('.audi_description p');
    var progressBar = document.getElementById('progressBar');
    var progressWidth = 0;
    var interval = 20; // Change interval to match description change interval in seconds

    // Loop through descriptions to hide/show them
    for (var i = 0; i < descriptions.length; i++) {
        if (!descriptions[i].classList.contains('hidden')) {
            descriptions[i].classList.add('hidden');
            var nextIndex = (i + 1) % descriptions.length;
            descriptions[nextIndex].classList.remove('hidden');
            break;
        }
    }

    // Update progress bar
    var timer = setInterval(function() {
        progressWidth += 100 / (interval * 10);
        progressBar.style.width = progressWidth + '%';
        if (progressWidth >= 100) {
            clearInterval(timer);
        }
    }, 100);
}

// Change description every 20 seconds
setInterval(changeDescription, 20000);