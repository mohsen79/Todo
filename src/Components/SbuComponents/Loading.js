import './Loading.css';
export default function Loading() {
    let loadingStyle = {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 100,
        top: 0,
        backgroundColor: 'rgb(0,0,0,0.4)',
        display: 'flex',
        jsutifyContent: 'space-between'
    };
    return (
        <div style={loadingStyle} className="justify-content-center align-items-center">
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
}