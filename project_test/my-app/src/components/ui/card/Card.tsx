type CardProps = {
  title: string;
  description: string;
  image: string;
};

export function Card({ title, description, image }: CardProps) {
  return (
    <div className="card">
      <div className="card-body">
        <img src={image} alt={title} className="w-100 d-block mb-3 rounded"/>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}