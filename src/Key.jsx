export default function Key(props) {

    const text = props.text;
    const onClick = props.onClick;

    return (
        <button onClick={onClick} className="h-8 w-8 border-1 rounded-md hover:border-2 cursor-grab">{text}</button>
    );

}