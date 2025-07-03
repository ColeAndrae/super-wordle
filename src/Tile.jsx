export default function Tile(props) {

    const size = props.size;
    const id = props.id;

    return (
        <button id={id} className="border-1" style={{ height: size, width: size, fontSize: size / 2 }}>{ }</button>
    );

}