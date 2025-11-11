// Additional component-specific JavaScript

// Workflow step styling
const style = document.createElement('style');
style.textContent = `
  .workflow-step {
    background: var(--charcoal);
    border: 2px solid var(--cyan);
    border-radius: 12px;
    padding: 1.5rem;
    min-width: 150px;
    text-align: center;
  }

  .step-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: var(--cyan);
    color: var(--navy);
    border-radius: 50%;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }

  .step-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }

  .step-desc {
    font-size: 0.85rem;
    color: var(--text-secondary);
    line-height: 1.4;
  }

  .workflow-arrow {
    font-size: 2rem;
    color: var(--cyan);
    font-weight: 700;
  }

  @media (max-width: 1024px) {
    .workflow-step {
      min-width: 120px;
      padding: 1rem;
    }
    
    .step-number {
      width: 32px;
      height: 32px;
      font-size: 1.2rem;
    }
  }
`;

document.head.appendChild(style);

// Global filter handlers
if (document.getElementById('dateRange')) {
  document.getElementById('dateRange').addEventListener('change', function() {
    console.log('Date range changed:', this.value);
    // In production, this would refresh all charts with new data range
  });
}

if (document.getElementById('regimeFilter')) {
  document.getElementById('regimeFilter').addEventListener('change', function() {
    console.log('Regime filter changed:', this.value);
    // In production, this would filter data by volatility regime
  });
}

if (document.getElementById('strategyFilter')) {
  document.getElementById('strategyFilter').addEventListener('change', function() {
    const selected = Array.from(this.selectedOptions).map(opt => opt.value);
    console.log('Strategy filter changed:', selected);
    // In production, this would filter displayed strategies
  });
}

// Update timestamp every minute
function updateTimestamp() {
  const now = new Date();
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/New_York',
    timeZoneName: 'short'
  };
  const formatted = now.toLocaleString('en-US', options);
  
  const timestampEl = document.getElementById('lastUpdated');
  if (timestampEl) {
    timestampEl.textContent = `Last Updated: ${formatted}`;
  }
}

setInterval(updateTimestamp, 60000);
updateTimestamp();

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
  // Ctrl/Cmd + number to switch tabs
  if ((e.ctrlKey || e.metaKey) && e.key >= '1' && e.key <= '9') {
    e.preventDefault();
    const tabIndex = parseInt(e.key) - 1;
    const tabs = document.querySelectorAll('.tab-btn');
    if (tabs[tabIndex]) {
      tabs[tabIndex].click();
    }
  }
});

// Console easter egg
console.log('%cProfessional Volatility Analytics Platform', 'color: #00BCD4; font-size: 24px; font-weight: bold;');
console.log('%cInstitutional-grade analytics combining:', 'color: #B0BEC5; font-size: 14px;');
console.log('%c• ETF Market Microstructure (Creation/Redemption, VPIN)', 'color: #4CAF50; font-size: 12px;');
console.log('%c• Fundamental Law of Active Management Framework', 'color: #FFC107; font-size: 12px;');
console.log('%c• Modern Machine Learning Techniques', 'color: #F44336; font-size: 12px;');
console.log('%cBuilt for demonstrating mastery of quantitative finance', 'color: #B0BEC5; font-size: 12px; font-style: italic;');

// Export functionality (placeholder)
window.exportData = function(format) {
  console.log(`Exporting data in ${format} format...`);
  alert(`Export functionality would download data as ${format}`);
};

// Print functionality
window.printReport = function() {
  window.print();
};

// Add tooltips on hover for educational content
document.addEventListener('DOMContentLoaded', function() {
  const tooltipElements = document.querySelectorAll('[data-tooltip]');
  
  tooltipElements.forEach(el => {
    el.style.cursor = 'help';
    el.style.borderBottom = '1px dotted var(--cyan)';
    
    el.addEventListener('mouseenter', function(e) {
      const tooltip = document.createElement('div');
      tooltip.className = 'custom-tooltip';
      tooltip.textContent = this.dataset.tooltip;
      tooltip.style.cssText = `
        position: fixed;
        background: var(--charcoal);
        color: var(--text-primary);
        padding: 0.75rem 1rem;
        border-radius: 6px;
        border: 1px solid var(--cyan);
        font-size: 0.9rem;
        max-width: 300px;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        left: ${e.clientX + 10}px;
        top: ${e.clientY + 10}px;
      `;
      document.body.appendChild(tooltip);
      this._tooltip = tooltip;
    });
    
    el.addEventListener('mouseleave', function() {
      if (this._tooltip) {
        this._tooltip.remove();
        this._tooltip = null;
      }
    });
  });
});

// Performance monitoring
if (window.performance && window.performance.timing) {
  window.addEventListener('load', function() {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log(`%cPage loaded in ${loadTime}ms`, 'color: #4CAF50; font-weight: bold;');
  });
}