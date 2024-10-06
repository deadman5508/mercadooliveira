

export default function Map() {

    const lat = '-10.921151697235654'; // Latitude do local desejado -10.921151697235654, -37.11036706138679
    const lng = '-37.11036706138679'; // Longitude do local desejado
    const apiKey = 'AIzaSyA_xBQitddeGiQi0JxPu9sk9407HXAZ92Y'; // Substitua pela sua chave da API

    return (
        <div className="">
        
            <iframe
                className=" cursor-none"
                src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=R.+Oito,+99+-+Rosa+Elze,+São+Cristóvão+-+SE,+49100-000&zoom=17`}
                width="350"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Google Map"
            ></iframe>
        </div>
    );
};

