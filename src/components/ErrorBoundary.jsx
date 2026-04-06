import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ errorInfo });
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div style={{
                    padding: '20px',
                    backgroundColor: '#991b1b', // Dark red background
                    color: 'white',
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                }}>
                    <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
                        Oops! Bir şeyler ters gitti.
                    </h1>
                    <p style={{ marginBottom: '20px' }}>
                        Uygulama beklenmedik bir hatayla karşılaştı.
                    </p>

                    <div style={{
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        padding: '15px',
                        borderRadius: '8px',
                        textAlign: 'left',
                        maxWidth: '90%',
                        overflow: 'auto',
                        marginBottom: '20px',
                        fontSize: '12px',
                        fontFamily: 'monospace'
                    }}>
                        <strong style={{ color: '#fca5a5' }}>
                            {this.state.error && this.state.error.toString()}
                        </strong>
                        <br />
                        <pre style={{ margin: '10px 0 0 0', whiteSpace: 'pre-wrap' }}>
                            {this.state.errorInfo && this.state.errorInfo.componentStack}
                        </pre>
                    </div>

                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '6px',
                            backgroundColor: 'white',
                            color: '#991b1b',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            fontSize: '16px'
                        }}
                    >
                        Uygulamayı Yeniden Başlat
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
