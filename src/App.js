import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories/Categories";
import ShowFullItem from "./components/ShowFullItem/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Печенья Milka шоколад 135г.",
          img: "2.jpg",
          desc: "Печенье Milka - замечательное овсяное печенье с кусочками любимого, альпийского молочного шоколада. Подходит и для того, чтобы порадовать самих себя сытным и вкусным лакомством, и для того, чтобы угостить друзей, которые по достоинству оценят ваш выбор.",
          category: "Печенья",
          price: "329 руб.",
        },
        {
          id: 2,
          title: "Пирожное Orion Choco Pie Кокос 360 г.",
          img: "3.jpg",
          desc: "Choco-Pie со вкусом тропического кокоса это гармоничное сочетание шоколада, воздушного бисквита, с добавлением кокосовой стружки, суфле и изумительно нежной кокосовой начинки, дающие незабываемый вкус!",
          category: "Печенья",
          price: "171 руб.",
        },
        {
          id: 3,
          title: "Coca-Cola 330 мл.",
          img: "12.jpg",
          desc: "Кока кола – это любимый напиток нашего детства, который отличается ярко выраженным вкусом и неповторимым сладковато-ванильным ароматом. Кока-кола в стекле считается одним из самых вкусных вариантов напитка, который рекомендуется пить охлажденным.",
          category: "Газировка",
          price: "94 руб.",
        },
        {
          id: 4,
          title: "Fanta Berry 355 мл.",
          img: "11.jpg",
          desc: "Fanta из США вкуснейший газированный напиток. Пузырьки Fanta приятно пощипывают язык, окутывая Ваши рецепторы и усиливая вкусовые ощущения. Fanta идеальный спутник.",
          category: "Газировка",
          price: "126 руб.",
        },
        {
          id: 5,
          title: "Чипсы лейс лосось в сливочном соусе рифленые 140 гр.",
          img: "13.jpg",
          desc: "Lays - чипсы, хрустящие и легкие на вкус картофельные чипсы были созданы, чтобы вызвать улыбку на лице каждого человека, поэтому ими так приятно делиться с лучшими друзьями. Упаковка чипсы Lays, несомненно, скрасят ваш день!",
          category: "Чипсы",
          price: "116 руб.",
        },
        {
          id: 6,
          title: "LAY's из Печи Нежный Сыр с Зеленью 85гр.",
          img: "7.jpg",
          desc: "Lays — чипсы, каждая пачка которых изготовлена из специально отобранного картофеля и соответствует самым высоким стандартам качества. Хрустящие Чипсы Lays приготовлены со вкусом «нежный сыр с зеленью». Отличное сочетание вкуса сыра, зелени и золотистых картофельных чипсов подарят вихрь удовольствия!",
          category: "Чипсы",
          price: "136 руб.",
        },
        {
          id: 7,
          title: "Twix Шоколадный батончик 55 гр.",
          img: "1.jpg",
          desc: "Хрустящее печенье, покрытое густой карамелью и молочным шоколадом, делает шоколадный батончик Twix таким вкусным и узнаваемым.",
          category: "Конфеты",
          price: "43 руб.",
        },
        {
          id: 8,
          title: "Snickers Minis 180 гр.",
          img: "6.jpg",
          desc: "Вкусные и питательные Snickers Минис помогут утолить голод, где бы вы не находились. Сочетание нуги, карамели, арахиса и, конечно же, молочного шоколада - это не просто перекус, а перекус с удовольствием.",
          category: "Конфеты",
          price: "236 руб.",
        },
        {
          id: 9,
          title: "Шоколадные палочки Milky Way Crispy Rolls 150 гр.",
          img: "30.jpg",
          desc: "MILKYWAY CRISPY ROLLS представляет из себя 2 тоненькие вафельные трубочки, политые шоколадом и со сливочным кремом внутри. Тонкий слой шоколада очень сладкий, а сливочный крем, напротив, нейтрально нежный, он выгодно уравновешивает вкус, создает гармонию. Посредником между ними лежит хрустящая вафелька.",
          category: "Конфеты",
          price: "265 руб.",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />

        {this.state.showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={this.state.fullItem}
          />
        )}

        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}
export default App;
