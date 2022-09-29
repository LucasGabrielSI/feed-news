// props: { author: "", content: "" }
export function Post(props) {
  console.log(props);
  return (
    <div>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </div>
  );
}

// Default Exports vs Named Exports
// default Exports: Na importação pode ser utilizado qualquer nome para o component.
// Name Exports: Não utiliza default e o retorno vai direto na function.
