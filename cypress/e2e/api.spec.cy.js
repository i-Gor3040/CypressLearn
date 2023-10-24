/// <reference types="cypress" />
import { onLandingPage } from "../support/pageObject/landingPage";

let name;
let method;
let url;
let statusCode;
let obj;

describe("API intercept", () => {
  beforeEach("open app", () => {
    cy.log("opening web page");
    onLandingPage.openBasePage();
  });

   it("Tags mock", () => {
    name = "tags";
    method = "GET";
    url = "https://api.realworld.io/api/tags";
    obj = {
      "tags": [
        "Warsaw",
        "Krakow",
        "Lodz",
        "Wroclaw",
        "Gdansk",
        "Szczecin",
        "Bydgoszcz",
        "Lublin ",
        "Bialystok",
      ],
    }
    statusCode = 202;

    onLandingPage.interceptAndMockCallTags(name, method, url, statusCode, obj)
  });

  it("Articles mock", () => {
    name = "articles";
    method = "GET";
    url = "https://api.realworld.io/api/articles?limit=10&offset=0";
    statusCode = 200;
    obj = {
      articles: [
        {
          slug: "If-we-quantify-the-alarm-we-can-get-to-the-FTP-pixel-through-the-online-SSL-interface!-120863",
          title:
            "If we quantify the alarm, we can get to the FTP pixel through the online SSL interface!",
          description:
            "Omnis perspiciatis qui quia commodi sequi modi. Nostrum quam aut cupiditate est facere omnis possimus. Tenetur similique nemo illo soluta molestias facere quo. Ipsam totam facilis delectus nihil quidem soluta vel est omnis.",
          body: "Quia quo iste et aperiam voluptas consectetur a omnis et.\\nDolores et earum consequuntur sunt et.\\nEa nulla ab voluptatem dicta vel. Temporibus aut adipisci magnam aliquam eveniet nihil laudantium reprehenderit sit.\\nAspernatur cumque labore voluptates mollitia deleniti et. Quos pariatur tenetur.\\nQuasi omnis eveniet eos maiores esse magni possimus blanditiis.\\nQui incidunt sit quos consequatur aut qui et aperiam delectus.\\nPraesentium quas culpa.\\nEaque occaecati cumque incidunt et. Provident saepe omnis non molestiae natus et.\\nAccusamus laudantium hic unde voluptate et sunt voluptatem.\\nMollitia velit id eius mollitia occaecati repudiandae. Voluptatum tempora voluptas est odio iure odio dolorem.\\nVoluptatum est deleniti explicabo explicabo harum provident quis molestiae. Sed dolores nostrum quis. Aut ipsa et qui vel similique sed hic a.\\nVoluptates dolorem culpa nihil aut ipsam voluptatem. Cupiditate officia voluptatum.\\nTenetur facere eum distinctio animi qui laboriosam.\\nQuod sed voluptatem et cumque est eos.\\nSint id provident suscipit harum odio et. Facere beatae delectus ut.\\nPossimus voluptas perspiciatis voluptatem nihil sint praesentium.\\nSint est nihil voluptates nesciunt voluptatibus temporibus blanditiis.\\nOfficiis voluptatem earum sed. Deserunt ab porro similique est accusamus id enim aut suscipit.\\nSoluta reprehenderit error nesciunt odit veniam sed.\\nDolore optio qui aut ab.\\nAut minima provident eius repudiandae a quibusdam in nisi quam.",
          tagList: ["rerum", "maiores", "omnis", "quae"],
          createdAt: "2022-12-09T13:46:24.264Z",
          updatedAt: "2022-12-09T13:46:24.264Z",
          favorited: false,
          favoritesCount: 2047,
          author: {
            username: "Anah Benešová",
            bio: null,
            image: "https://api.realworld.io/images/demo-avatar.png",
            following: false,
          },
        },
        {
          slug: "Try-to-transmit-the-HTTP-card-maybe-it-will-override-the-multi-byte-hard-drive!-120863",
          title:
            "Try to transmit the HTTP card, maybe it will override the multi-byte hard drive!",
          description:
            "Assumenda molestiae laboriosam enim ipsum quaerat enim officia vel quo. Earum odit rem natus totam atque cumque. Sint dolorem facere non.",
          body: "Sunt excepturi ut dolore fuga.\\nAutem eum maiores aut nihil magnam corporis consectetur sit. Voluptate et quasi optio eos et eveniet culpa et nobis.\\nSint aut sint sequi possimus reiciendis nisi.\\nRerum et omnis et sit doloribus corporis voluptas error.\\nIusto molestiae tenetur necessitatibus dolorem omnis. Libero sed ut architecto.\\nEx itaque et modi aut voluptatem alias quae.\\nModi dolor cupiditate sit.\\nDelectus consectetur nobis aliquid deserunt sint ut et voluptas.\\nCorrupti in labore laborum quod. Ipsa laudantium deserunt. Ut atque harum inventore natus facere sed molestiae.\\nQuia aliquid ut.\\nAnimi sunt rem et sit ullam dolorem ab consequatur modi. Cupiditate officia voluptatum.\\nTenetur facere eum distinctio animi qui laboriosam.\\nQuod sed voluptatem et cumque est eos.\\nSint id provident suscipit harum odio et. Et fuga repellendus magnam dignissimos eius aspernatur rerum. Quo perferendis nesciunt.\\nDolore dolorem porro omnis voluptatibus consequuntur et expedita suscipit et.\\nTempora facere ipsa.\\nDolore accusamus soluta officiis eligendi.\\nEum quaerat neque eum beatae odio. Ad voluptate vel.\\nAut aut dolor. Cupiditate officia voluptatum.\\nTenetur facere eum distinctio animi qui laboriosam.\\nQuod sed voluptatem et cumque est eos.\\nSint id provident suscipit harum odio et.",
          tagList: ["voluptate", "rerum", "ducimus", "hic"],
          createdAt: "2022-12-09T13:46:24.264Z",
          updatedAt: "2022-12-09T13:46:24.264Z",
          favorited: false,
          favoritesCount: 2136,
          author: {
            username: "Anah Benešová",
            bio: null,
            image: "https://api.realworld.io/images/demo-avatar.png",
            following: false,
          },
        },
        {
          slug: "Try-to-generate-the-TCP-bus-maybe-it-will-override-the-neural-bandwidth!-120863",
          title:
            "Try to generate the TCP bus, maybe it will override the neural bandwidth!",
          description:
            "Pariatur ut dolor repellendus dolores ut debitis. Est iusto neque dicta voluptatibus quia nulla consequatur. Omnis aut sed dolores qui laborum a amet.",
          body: "Quo perferendis nesciunt.\\nDolore dolorem porro omnis voluptatibus consequuntur et expedita suscipit et.\\nTempora facere ipsa.\\nDolore accusamus soluta officiis eligendi.\\nEum quaerat neque eum beatae odio. Qui soluta veritatis autem repellat et inventore occaecati. Doloribus consequatur et labore suscipit deserunt tempore ad quasi sed.\\nQuam cupiditate modi dolor et eos et culpa qui.\\nDelectus molestias ea id.\\nIllum ea unde sapiente non non non.\\nDolorem ut sed magni. Provident saepe omnis non molestiae natus et.\\nAccusamus laudantium hic unde voluptate et sunt voluptatem.\\nMollitia velit id eius mollitia occaecati repudiandae. Incidunt doloremque enim autem quam et magnam et expedita fuga.\\nPlaceat quia dolor ut.\\nNon dolor amet temporibus quas non hic sed.\\nQui tempore enim mollitia omnis sed ut eos rerum et.\\nQuidem voluptas est vel. Placeat sequi quaerat sapiente aspernatur autem sunt molestiae voluptatem.\\nAccusamus unde libero accusamus omnis totam et temporibus. Cupiditate officia voluptatum.\\nTenetur facere eum distinctio animi qui laboriosam.\\nQuod sed voluptatem et cumque est eos.\\nSint id provident suscipit harum odio et. Iusto laborum aperiam neque delectus consequuntur provident est maiores explicabo. Laborum est maxime enim accusantium magnam.\\nRerum dolorum minus laudantium delectus eligendi necessitatibus quia.\\nDeleniti consequatur explicabo aut nobis est vero tempore.\\nExcepturi earum quo quod voluptatem quo iure vel sapiente occaecati.\\nConsectetur consequatur corporis doloribus omnis harum voluptas esse amet. Mollitia nostrum exercitationem sunt rem.\\nRem et voluptas consequatur mollitia nostrum.\\nSunt nesciunt et pariatur quam provident impedit.",
          tagList: ["dicta", "rerum", "omnis", "blanditiis"],
          createdAt: "2022-12-09T13:46:24.263Z",
          updatedAt: "2022-12-09T13:46:24.263Z",
          favorited: false,
          favoritesCount: 382,
          author: {
            username: "Anah Benešová",
            bio: null,
            image: "https://api.realworld.io/images/demo-avatar.png",
            following: false,
          },
        },
        {
          slug: "You-cant-transmit-the-firewall-without-copying-the-1080p-SDD-interface!-120863",
          title:
            "You cant transmit the firewall without copying the 1080p SDD interface!",
          description:
            "Est sed deserunt eligendi in velit saepe. Dolorem quis illo vero qui ut recusandae occaecati dolores quae. Voluptatem vero aliquam alias adipisci reiciendis odit nobis est. Vel laboriosam quia commodi rerum. Voluptatum et sed et nesciunt iure ipsum iste aut enim.",
          body: "Incidunt doloremque enim autem quam et magnam et expedita fuga.\\nPlaceat quia dolor ut.\\nNon dolor amet temporibus quas non hic sed.\\nQui tempore enim mollitia omnis sed ut eos rerum et.\\nQuidem voluptas est vel. Temporibus quod quidem placeat porro.\\nUnde ipsam vel explicabo. Qui et dolorum.\\nEveniet architecto qui accusamus et modi harum facilis a eum.\\nEt vel cumque voluptatem earum minima perferendis. Ducimus dolores recusandae.\\nEa aut aperiam et aut eos inventore.\\nQuia cum ducimus autem iste.\\nQuos consequuntur est delectus temporibus autem. Quas ea voluptatem iste iure.\\nEt soluta et doloremque vero quis occaecati et fuga.\\nIncidunt recusandae dignissimos iusto quisquam sed unde at ea incidunt.\\nId voluptate incidunt qui totam autem voluptas maxime atque quaerat.\\nCorporis iste ut molestiae. Laborum itaque quos provident.\\nRerum cupiditate praesentium amet voluptatem dolor impedit modi dicta.\\nVoluptates assumenda optio est.\\nNon aperiam nam consequuntur vel a commodi dicta incidunt. Autem reiciendis provident iure possimus.\\nOccaecati soluta quibusdam libero tenetur minus vel sit illo.\\nCulpa optio dolorem eos similique voluptatem voluptatibus error accusantium. Officia consectetur quibusdam velit debitis porro quia cumque.\\nSuscipit esse voluptatem cum sit totam consequatur molestiae est.\\nMollitia pariatur distinctio fugit. Quis nesciunt ut est eos.\\nQui reiciendis doloribus.\\nEst quidem ullam reprehenderit.\\nEst omnis eligendi quis quis quo eum officiis asperiores quis. Et sed dicta eveniet accusamus consequatur.\\nUllam voluptas consequatur aut eos ducimus.\\nId officia est ut dicta provident beatae ipsa.",
          tagList: ["possimus", "maiores", "facilis"],
          createdAt: "2022-12-09T13:46:24.263Z",
          updatedAt: "2022-12-09T13:46:24.263Z",
          favorited: false,
          favoritesCount: 256,
          author: {
            username: "Anah Benešová",
            bio: null,
            image: "https://api.realworld.io/images/demo-avatar.png",
            following: false,
          },
        },
      ],
      articlesCount: 4,
    };

    onLandingPage.interceptAndMockCallArticles(name, method, url, statusCode, obj);
  });
});
