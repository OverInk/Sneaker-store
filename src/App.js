

function App() {
  return (
    <div className="wrapper">
      <header>
			<div className="headerLeft">
				<img src="/img/logo_header_left.svg"/>
				<div className="headerInfo">
					<h3>React OverInk</h3>
					<p>Магазин лучших кроссовок</p>
				</div>
			</div>
			<ul className="headerLeft">
				<li>
					<svg/>
					<span>1005 рублей</span>
				</li>
				<li>
					<svg/>
				</li>
			</ul>
		</header>

		<div className="content">
			<h1>
				Все кроссовки
			</h1>
			...
		</div>
    </div>
  );
}

export default App;
