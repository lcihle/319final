// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Define your React component
function SkiDetails() {
    return (
        <div>
            <h1>Ski Details</h1>
            <p>This is the ski details page.</p>
        </div>
    );
}

// Render the React component to the DOM
ReactDOM.render(<SkiDetails />, document.getElementById('root'));
