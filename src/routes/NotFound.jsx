
const bgAuthPage = {
    backgroundColor: '#0093E9',
    backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
}
const NotFound = () => {
  
    // bg-dark
    return (
            <div className="container-fluid  text-light p-4" style={bgAuthPage}>
                <div className="container p-4 text-dark">
                    <h1 className="display-3 fw-bold">Oh uh!</h1>
                    <p><span className="fw-bold fs-5">404</span> error. La URL no fue encontrada en el servidor</p>
                    
                </div>
            </div>
      );
}
 
export default NotFound;