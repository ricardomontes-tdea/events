import { events } from "../mocks/events";

export const EventsPage = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Eventos</h1>
      <div className="row">
        {events.map((event) => (
          <div className="col-md-6 col-lg-4 mb-4" key={event.id}>
            <div className="card animate__animated animate__fadeInUp">
              <img
                src={event.imageUrl}
                className="card-img-top"
                alt={`Imagen del evento ${event.name}`}
              />
              <div className="card-body">
                <h5 className="card-title">{event.name}</h5>
                <p className="card-text">Fecha: {event.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
