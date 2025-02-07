const objects = [
    { id: 1, startDate: '2024-01-01', endDate: '2024-06-30' },
    { id: 2, startDate: '2024-02-15', endDate: '2024-08-15' },
    { id: 3, startDate: '2024-03-01', endDate: '2024-09-01' },
    // Add more objects as needed
  ];
  
  function updateProgressBars(objects) {
    const container = document.getElementById('progress-container');
    container.innerHTML = ''; // Clear existing content
  
    objects.forEach(obj => {
      const start = new Date(obj.startDate);
      const end = new Date(obj.endDate);
      const today = new Date();
  
      const totalDuration = end - start;
      const elapsedDuration = today - start;
  
      const progressPercentage = (elapsedDuration / totalDuration) * 100;
  
      // Create progress bar elements
      const label = document.createElement('div');
      label.className = 'progress-label';
      label.textContent = `Object ${obj.id}`;
  
      const progressBar = document.createElement('div');
      progressBar.className = 'progress-bar';
      progressBar.style.width = progressPercentage + '%';
  
      container.appendChild(label);
      container.appendChild(progressBar);
    });
  }
  
  // Example usage
  updateProgressBars(objects);