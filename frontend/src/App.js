import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{fontSize: '3rem', marginBottom: '2rem', background: 'linear-gradient(45deg, #0db7ed, #384d54)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
          🐳 Docker Learning Hub
        </h1>
        <div style={{maxWidth: '800px', textAlign: 'left', background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '15px', backdropFilter: 'blur(10px)'}}>
          <h2 style={{color: '#61dafb', marginBottom: '1rem'}}>What is Docker?</h2>
          <p style={{fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem'}}>
            Docker is a platform that uses containerization to package applications and their dependencies into lightweight, portable containers that can run anywhere.
          </p>
          
          <h3 style={{color: '#0db7ed', marginBottom: '1rem'}}>Key Benefits:</h3>
          <ul style={{fontSize: '1rem', lineHeight: '1.8', textAlign: 'left', paddingLeft: '2rem'}}>
            <li>🚀 <strong>Consistency:</strong> "It works on my machine" → "It works everywhere"</li>
            <li>⚡ <strong>Efficiency:</strong> Lightweight containers vs heavy VMs</li>
            <li>📦 <strong>Isolation:</strong> Applications run in separate environments</li>
            <li>🔄 <strong>Scalability:</strong> Easy horizontal scaling and orchestration</li>
            <li>🛠️ <strong>DevOps:</strong> Streamlined CI/CD pipelines</li>
          </ul>

          <div style={{marginTop: '2rem', padding: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '10px', border: '1px solid #0db7ed'}}>
            <h4 style={{color: '#61dafb', margin: '0 0 1rem 0'}}>Quick Start Commands:</h4>
            <code style={{display: 'block', color: '#0db7ed', fontSize: '0.9rem', lineHeight: '1.5'}}>
              # Pull an image<br/>
              docker pull nginx<br/><br/>
              # Run a container<br/>
              docker run -d -p 80:80 nginx<br/><br/>
              # List running containers<br/>
              docker ps
            </code>
          </div>

          <div style={{marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a 
              href="https://docs.docker.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(45deg, #0db7ed, #384d54)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: 'bold',
                transition: 'transform 0.3s ease',
                border: 'none'
              }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              📚 Official Docs
            </a>
            <a 
              href="https://www.docker.com/play-with-docker" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(45deg, #61dafb, #21a1c4)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: 'bold',
                transition: 'transform 0.3s ease',
                border: 'none'
              }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              🎮 Play with Docker
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
