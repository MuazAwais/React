

function Card() {
  return (
    <div>
        <div className="card">

        <h2>Card Component</h2>
        <p>This is a simple card component in React.</p>
        <button className="card-button">Click Me</button>
        </div>
        <style jsx>{`
            .card {
            border: 1px solid #ccc;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            max-width: 300px;
            width: 100%;
            margin: 20px 40px;
        }
            .card-button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            }
            .card-button:hover {
            background-color: #45a049;
            }
        `}</style>
    </div>
  )
}

export default Card
