const musicData = [
    { id: 1, name: "Steven", band: "Daft punk", song: "Digital Love" },
    {
      id: 2,
      name: "Jason",
      band: "Radiohead",
      song: "These are my twisted words"
    },
    {
      id: 3,
      name: "Vickty",
      band: "Khruangbin",
      song: "White gloves"
    }
  ];

  {
    /* EXAMPLE OF WHAT THE HTML GENERATED BY FavMusic SHOULD LOOK LIKE
      <div>
        <h2>Steven preferences: </h2>
        <p>
          Steven loves Daft punk and recommends <strong>Digital Love</strong>
        </p>
      </div>
      <div>
        <h2>Jason preferences: </h2>
        <p>
          Jason loves Radiohead and recommends{" "}
          <strong>These are my twisted words</strong>
        </p>
      </div>
      <div>
        <h2>Vickty preferences: </h2>
        <p>
          Vickty loves Khruangbin and recommends <strong>White gloves</strong>
        </p>
      </div> 
    */
  }

  export default musicData;