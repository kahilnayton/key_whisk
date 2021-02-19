import WhiskeyItem from "../components/WhiskeyItem";

const WhiskeyList = ({ whiskeys }) => {
  return (
    <div>
      {whiskeys.results.map((whiskey) => (
        <WhiskeyItem key={whiskey.id} whiskey={whiskey} />
      ))}
    </div>
  );
};

export default WhiskeyList;
