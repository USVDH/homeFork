const Config = {
    name: "sen",
    scale: 1,
    Links: [
        [
      "dev",
      [
        ["github", "https://github.com/"],
        ["oh shit, git!?!", "https://ohshitgit.com/en"],
        ["coolors", "https://coolors.co/"],
        ["css to react native", "https://csstox.surge.sh/"],
        ["asana", "https://asana.com/"],
        ["packagephobia", "https://packagephobia.com/"],
      ],
    ],
    [
      "video",
      [
        ["documentary mania", "https://www.documentarymania.com"],
        ["youtube", "https://www.youtube.com"],
        ["aniwatch", "https://www.aniwatch.me"],
      ],
    ],
    [
      "misc",
      [
        ["reddit", "https://www.reddit.com"],
        [
          "link shortener",
          "http://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.com/",
        ],
        ["ai dungeon", "https://play.aidungeon.io/"],
        [
          "weathernews",
          "https://weathernews.jp/onebox/35.673960/140.092692/q=%E5%8D%83%E8%91%89%E5%B8%82%E8%8A%B1%E8%A6%8B%E5%B7%9D%E5%8C%BA&v=365fd88b095b7788211f1197abe2f9d667aa97e57efb25505ed200907c84dee6&temp=f&lang=en",
        ],
        ["eat by date", "http://www.eatbydate.com/"],
      ],
    ],
    ]
}

const Main = (() => {
    const list = document.getElementById("list");
    const names = document.querySelectorAll("[data-Name]");
    const search = document.getElementById("search");
    const form = document.forms[0];

    const init = () => {
        list.innerHTML = Config.Links.map(([gName, Links]) => `
            <li>
                <h1 onclick="this.parentNode.classList.toggle('hideChildren')">${gName}</h1>
                <ul>
                    ${Links.map(([lName, url]) => `
                        <li>
                            <a href="${url}">${lName}</a>
                        </li>`
                    ).join("")}
                </ul>
            </li>` 
        ).join("")
        
        names.forEach(el => {
            el.innerText = Config.name;
        });

        document.addEventListener("keydown", e => e.key.length === 1 && search.focus());
        search.addEventListener("keydown", () => (window.event ? event.keyCode : e.which) == 13 && form.submit());
    };

    return {
        init,
    };
})();

Main.init()
