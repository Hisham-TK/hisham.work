(this['webpackJsonppersonal-portfolio'] = this['webpackJsonppersonal-portfolio'] || []).push([
  [0],
  {
    15: function (e, a, t) {},
    18: function (e, a, t) {},
    19: function (e, a, t) {
      'use strict';
      t.r(a);
      var s = t(0),
        n = t(1),
        i = t.n(n),
        o = t(9),
        r = t.n(o),
        c = (t(15), t(2)),
        l = t(3),
        d = t(5),
        h = t(4),
        m = t(8),
        p =
          (t(18),
          (function (e) {
            Object(d.a)(t, e);
            var a = Object(h.a)(t);
            function t() {
              return Object(c.a)(this, t), a.apply(this, arguments);
            }
            return (
              Object(l.a)(t, [
                {
                  key: 'render',
                  value: function () {
                    if (this.props.data)
                      var e = this.props.data.name,
                        a = this.props.data.occupation,
                        t = this.props.data.description,
                        n = this.props.data.address.city,
                        i = this.props.data.social.map(function (e) {
                          return Object(s.jsx)(
                            'li',
                            {
                              children: Object(s.jsx)('a', {
                                href: e.url,
                                target: '_blank',
                                title: e.name,
                                children: Object(s.jsx)('i', { className: e.className }),
                              }),
                            },
                            e.name,
                          );
                        });
                    return Object(s.jsxs)('header', {
                      id: 'home',
                      children: [
                        Object(s.jsxs)('nav', {
                          id: 'nav-wrap',
                          children: [
                            Object(s.jsx)('a', {
                              className: 'mobile-btn',
                              href: '#nav-wrap',
                              title: 'Show navigation',
                              children: 'Show navigation',
                            }),
                            Object(s.jsx)('a', {
                              className: 'mobile-btn',
                              href: '#home',
                              title: 'Hide navigation',
                              children: 'Hide navigation',
                            }),
                            Object(s.jsxs)('ul', {
                              id: 'nav',
                              className: 'nav',
                              children: [
                                Object(s.jsx)('li', {
                                  className: 'current',
                                  children: Object(s.jsx)('a', {
                                    className: 'smoothscroll',
                                    href: '#home',
                                    children: 'Home',
                                  }),
                                }),
                                Object(s.jsx)('li', {
                                  children: Object(s.jsx)('a', {
                                    className: 'smoothscroll',
                                    href: '#about',
                                    children: 'About',
                                  }),
                                }),
                                Object(s.jsx)('li', {
                                  children: Object(s.jsx)('a', {
                                    className: 'smoothscroll',
                                    href: '#work',
                                    children: 'Work',
                                  }),
                                }),
                                Object(s.jsx)('li', {
                                  children: Object(s.jsx)('a', {
                                    className: 'smoothscroll',
                                    href: '#skills',
                                    children: 'Skills',
                                  }),
                                }),
                                Object(s.jsx)('li', {
                                  children: Object(s.jsx)('a', {
                                    className: 'smoothscroll',
                                    href: '#education',
                                    children: 'Education',
                                  }),
                                }),
                                Object(s.jsx)('li', {
                                  children: Object(s.jsx)('a', {
                                    className: 'smoothscroll',
                                    href: '#quotes',
                                    children: 'Quotes',
                                  }),
                                }),
                                Object(s.jsx)('li', {
                                  children: Object(s.jsx)('a', {
                                    className: 'smoothscroll',
                                    href: '#contact',
                                    children: 'Contact',
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(s.jsx)('div', {
                          className: 'row banner',
                          children: Object(s.jsxs)('div', {
                            className: 'banner-text',
                            children: [
                              Object(s.jsxs)('h1', { className: 'responsive-headline', children: ["I'm ", e, '.'] }),
                              Object(s.jsxs)('h3', {
                                children: [
                                  "I'm a ",
                                  n,
                                  ' based ',
                                  Object(s.jsx)('span', { children: a }),
                                  '. ',
                                  t,
                                  '.',
                                ],
                              }),
                              Object(s.jsx)('hr', {}),
                              Object(s.jsx)('ul', { className: 'social', children: i }),
                            ],
                          }),
                        }),
                        Object(s.jsx)('p', {
                          className: 'scrolldown',
                          children: Object(s.jsx)('a', {
                            className: 'smoothscroll',
                            href: '#about',
                            children: Object(s.jsx)('i', { className: 'icon-down-circle' }),
                          }),
                        }),
                      ],
                    });
                  },
                },
              ]),
              t
            );
          })(n.Component)),
        u = (function (e) {
          Object(d.a)(t, e);
          var a = Object(h.a)(t);
          function t() {
            return Object(c.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(l.a)(t, [
              {
                key: 'render',
                value: function () {
                  if (this.props.data) {
                    var e = this.props.data.name,
                      a = 'images/' + this.props.data.image,
                      t = (this.props.data.bio, this.props.data.address.street),
                      n = this.props.data.address.city,
                      i = this.props.data.address.state,
                      o = this.props.data.address.zip,
                      r = this.props.data.phone,
                      c = this.props.data.email,
                      l = this.props.data.resumedownload;
                    this.props.data.gisWebsite, this.props.data.website;
                  }
                  return Object(s.jsx)('section', {
                    id: 'about',
                    children: Object(s.jsxs)('div', {
                      className: 'row',
                      children: [
                        Object(s.jsx)('div', {
                          className: 'three columns',
                          children: Object(s.jsx)('img', { className: 'profile-pic', src: a, alt: 'My profile pic' }),
                        }),
                        Object(s.jsxs)('div', {
                          className: 'nine columns main-col',
                          children: [
                            Object(s.jsx)('h2', { children: 'About Me' }),
                            Object(s.jsxs)('div', {
                              className: 'row',
                              children: [
                                Object(s.jsxs)('div', {
                                  className: 'columns contact-details',
                                  children: [
                                    Object(s.jsx)('h2', { children: 'Contact Details' }),
                                    Object(s.jsxs)('p', {
                                      className: 'address',
                                      children: [
                                        Object(s.jsx)('span', { children: e }),
                                        Object(s.jsx)('br', {}),
                                        Object(s.jsxs)('span', {
                                          children: [t, Object(s.jsx)('br', {}), n, ' ', i, ', ', o],
                                        }),
                                        Object(s.jsx)('br', {}),
                                        Object(s.jsx)('span', { children: r }),
                                        Object(s.jsx)('br', {}),
                                        Object(s.jsx)('a', { href: 'mailto:hisham.taha.work@gmail.com' }),
                                        Object(s.jsx)('span', { children: c }),
                                      ],
                                    }),
                                  ],
                                }),
                                Object(s.jsx)('div', {
                                  className: 'columns download',
                                  children: Object(s.jsx)('p', {
                                    children: Object(s.jsxs)('a', {
                                      href: l,
                                      className: 'button',
                                      children: [
                                        Object(s.jsx)('i', { className: 'fa fa-download' }),
                                        'Download Resume',
                                      ],
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  });
                },
              },
            ]),
            t
          );
        })(n.Component),
        j = (function (e) {
          Object(d.a)(t, e);
          var a = Object(h.a)(t);
          function t() {
            return Object(c.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(l.a)(t, [
              {
                key: 'render',
                value: function () {
                  if (this.props.data)
                    var e = this.props.data.name,
                      a = this.props.data.address.street,
                      t = this.props.data.address.city,
                      n = this.props.data.address.state,
                      i = this.props.data.address.zip,
                      o = this.props.data.phone,
                      r = (this.props.data.email, this.props.data.contactmessage);
                  return Object(s.jsxs)('section', {
                    id: 'contact',
                    children: [
                      Object(s.jsxs)('div', {
                        className: 'row section-head',
                        children: [
                          Object(s.jsx)('div', {
                            className: 'two columns header-col',
                            children: Object(s.jsx)('h1', {
                              children: Object(s.jsx)('span', { children: 'Get In Touch.' }),
                            }),
                          }),
                          Object(s.jsx)('div', {
                            className: 'ten columns',
                            children: Object(s.jsx)('p', { className: 'lead', children: r }),
                          }),
                        ],
                      }),
                      Object(s.jsxs)('div', {
                        className: 'row',
                        children: [
                          Object(s.jsxs)('div', {
                            className: 'eight columns',
                            children: [
                              Object(s.jsx)('form', {
                                action: '',
                                method: 'post',
                                id: 'contactForm',
                                name: 'contactForm',
                                children: Object(s.jsxs)('fieldset', {
                                  children: [
                                    Object(s.jsxs)('div', {
                                      children: [
                                        Object(s.jsxs)('label', {
                                          htmlFor: 'contactName',
                                          children: [
                                            'Name ',
                                            Object(s.jsx)('span', { className: 'required', children: '*' }),
                                          ],
                                        }),
                                        Object(s.jsx)('input', {
                                          type: 'text',
                                          defaultValue: '',
                                          size: '35',
                                          id: 'contactName',
                                          name: 'contactName',
                                          onChange: this.handleChange,
                                        }),
                                      ],
                                    }),
                                    Object(s.jsxs)('div', {
                                      children: [
                                        Object(s.jsxs)('label', {
                                          htmlFor: 'contactEmail',
                                          children: [
                                            'Email ',
                                            Object(s.jsx)('span', { className: 'required', children: '*' }),
                                          ],
                                        }),
                                        Object(s.jsx)('input', {
                                          type: 'text',
                                          defaultValue: '',
                                          size: '35',
                                          id: 'contactEmail',
                                          name: 'contactEmail',
                                          onChange: this.handleChange,
                                        }),
                                      ],
                                    }),
                                    Object(s.jsxs)('div', {
                                      children: [
                                        Object(s.jsx)('label', { htmlFor: 'contactSubject', children: 'Subject' }),
                                        Object(s.jsx)('input', {
                                          type: 'text',
                                          defaultValue: '',
                                          size: '35',
                                          id: 'contactSubject',
                                          name: 'contactSubject',
                                          onChange: this.handleChange,
                                        }),
                                      ],
                                    }),
                                    Object(s.jsxs)('div', {
                                      children: [
                                        Object(s.jsxs)('label', {
                                          htmlFor: 'contactMessage',
                                          children: [
                                            'Message ',
                                            Object(s.jsx)('span', { className: 'required', children: '*' }),
                                          ],
                                        }),
                                        Object(s.jsx)('textarea', {
                                          cols: '50',
                                          rows: '7',
                                          id: 'contactMessage',
                                          name: 'contactMessage',
                                        }),
                                      ],
                                    }),
                                    Object(s.jsxs)('div', {
                                      children: [
                                        Object(s.jsx)('button', { className: 'submit', children: 'Submit' }),
                                        Object(s.jsx)('span', {
                                          id: 'image-loader',
                                          children: Object(s.jsx)('img', {
                                            alt: 'Loader image',
                                            src: 'images/loader.gif',
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              Object(s.jsx)('div', { id: 'message-warning', children: ' Error boy' }),
                              Object(s.jsxs)('div', {
                                id: 'message-success',
                                children: [
                                  Object(s.jsx)('i', { className: 'fa fa-check' }),
                                  'Your message was sent, thank you!',
                                  Object(s.jsx)('br', {}),
                                ],
                              }),
                            ],
                          }),
                          Object(s.jsx)('aside', {
                            className: 'four columns footer-widgets',
                            children: Object(s.jsxs)('div', {
                              className: 'widget widget_contact',
                              children: [
                                Object(s.jsx)('h4', { children: 'Address and Phone' }),
                                Object(s.jsxs)('p', {
                                  className: 'address',
                                  children: [
                                    e,
                                    Object(s.jsx)('br', {}),
                                    a,
                                    ' ',
                                    Object(s.jsx)('br', {}),
                                    t,
                                    ', ',
                                    n,
                                    ' ',
                                    i,
                                    Object(s.jsx)('br', {}),
                                    Object(s.jsx)('span', { children: o }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(n.Component),
        b = (function (e) {
          Object(d.a)(t, e);
          var a = Object(h.a)(t);
          function t() {
            return Object(c.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(l.a)(t, [
              {
                key: 'render',
                value: function () {
                  if (this.props.data)
                    var e = this.props.data.map(function (e, a) {
                      return Object(s.jsxs)(i.a.Fragment, {
                        children: [
                          !!a && Object(s.jsx)('hr', {}),
                          Object(s.jsxs)(
                            'div',
                            {
                              children: [
                                Object(s.jsx)('h3', { children: e.company }),
                                Object(s.jsxs)('p', {
                                  className: 'info',
                                  children: [
                                    e.title,
                                    Object(s.jsx)('span', { children: '\u2022' }),
                                    ' ',
                                    Object(s.jsx)('em', { className: 'date', children: e.years }),
                                  ],
                                }),
                                Object(s.jsx)('p', { children: e.description }),
                              ],
                            },
                            e.company,
                          ),
                        ],
                      });
                    });
                  return Object(s.jsx)('section', {
                    id: 'work',
                    children: Object(s.jsxs)('div', {
                      className: 'row work',
                      children: [
                        Object(s.jsx)('div', {
                          className: 'three columns header-col',
                          children: Object(s.jsx)('h1', { children: Object(s.jsx)('span', { children: 'Work' }) }),
                        }),
                        Object(s.jsx)('div', { className: 'nine columns main-col', children: e }),
                      ],
                    }),
                  });
                },
              },
            ]),
            t
          );
        })(i.a.Component),
        g = (function (e) {
          Object(d.a)(t, e);
          var a = Object(h.a)(t);
          function t() {
            return Object(c.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(l.a)(t, [
              {
                key: 'render',
                value: function () {
                  if (this.props.data)
                    var e = this.props.data.map(function (e) {
                      var a = 'bar-expand ' + e.name.toLowerCase();
                      return Object(s.jsxs)(
                        'li',
                        {
                          style: { marginLeft: '3%', display: 'inline-block', width: '47%' },
                          title: e.desc,
                          children: [
                            Object(s.jsx)('span', { style: { width: e.level }, className: a }),
                            Object(s.jsx)('em', { children: e.name }),
                          ],
                        },
                        e.name,
                      );
                    });
                  return Object(s.jsx)('section', {
                    id: 'skills',
                    children: Object(s.jsxs)('div', {
                      className: 'row skill',
                      children: [
                        Object(s.jsx)('div', {
                          className: 'three columns header-col',
                          children: Object(s.jsx)('h1', { children: Object(s.jsx)('span', { children: 'Skills' }) }),
                        }),
                        Object(s.jsx)('div', {
                          className: 'eleven columns main-col',
                          children: Object(s.jsx)('div', {
                            className: 'bars container',
                            children: Object(s.jsx)('ul', { className: 'skills row', children: e }),
                          }),
                        }),
                      ],
                    }),
                  });
                },
              },
            ]),
            t
          );
        })(n.Component),
        f = (function (e) {
          Object(d.a)(t, e);
          var a = Object(h.a)(t);
          function t() {
            return Object(c.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(l.a)(t, [
              {
                key: 'render',
                value: function () {
                  if (this.props.data)
                    var e = this.props.data.map(function (e, a) {
                      return Object(s.jsxs)(i.a.Fragment, {
                        children: [
                          !!a && Object(s.jsx)('hr', {}),
                          Object(s.jsxs)(
                            'div',
                            {
                              className: '',
                              children: [
                                Object(s.jsx)('h3', { children: e.school }),
                                Object(s.jsxs)('p', {
                                  className: 'info',
                                  children: [
                                    e.degree,
                                    ' ',
                                    Object(s.jsx)('span', { children: '\u2022' }),
                                    Object(s.jsx)('em', { className: 'date', children: e.graduated }),
                                  ],
                                }),
                                Object(s.jsx)('pre', { children: e.description }),
                              ],
                            },
                            e.school,
                          ),
                        ],
                      });
                    });
                  return Object(s.jsx)('section', {
                    id: 'education',
                    children: Object(s.jsxs)('div', {
                      className: 'row education',
                      children: [
                        Object(s.jsx)('div', {
                          className: 'three columns header-col',
                          children: Object(s.jsx)('h1', { children: Object(s.jsx)('span', { children: 'Education' }) }),
                        }),
                        Object(s.jsx)('div', {
                          className: 'nine columns main-col',
                          children: Object(s.jsx)('div', {
                            className: 'row item',
                            children: Object(s.jsx)('div', { className: 'twelve columns', children: e }),
                          }),
                        }),
                      ],
                    }),
                  });
                },
              },
            ]),
            t
          );
        })(n.Component),
        v = (function (e) {
          Object(d.a)(t, e);
          var a = Object(h.a)(t);
          function t() {
            return Object(c.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(l.a)(t, [
              {
                key: 'render',
                value: function () {
                  if (this.props.data)
                    var e = this.props.data.map(function (e) {
                      return Object(s.jsx)(
                        'li',
                        {
                          children: Object(s.jsxs)('blockquote', {
                            children: [
                              Object(s.jsx)('p', { children: e.text }),
                              Object(s.jsx)('cite', { children: e.user }),
                            ],
                          }),
                        },
                        e.user,
                      );
                    });
                  return Object(s.jsx)('section', {
                    id: 'quotes',
                    children: Object(s.jsx)('div', {
                      className: 'text-container',
                      children: Object(s.jsxs)('div', {
                        className: 'row',
                        children: [
                          Object(s.jsx)('div', {
                            className: 'two columns header-col',
                            children: Object(s.jsx)('h1', {
                              children: Object(s.jsx)('span', { children: 'Client Quotes' }),
                            }),
                          }),
                          Object(s.jsx)('div', {
                            className: 'ten columns flex-container',
                            children: Object(s.jsx)('ul', { className: 'slides', children: e }),
                          }),
                        ],
                      }),
                    }),
                  });
                },
              },
            ]),
            t
          );
        })(n.Component),
        x = (function (e) {
          Object(d.a)(t, e);
          var a = Object(h.a)(t);
          function t() {
            return Object(c.a)(this, t), a.apply(this, arguments);
          }
          return (
            Object(l.a)(t, [
              {
                key: 'render',
                value: function () {
                  if (this.props.data)
                    var e = this.props.data.social.map(function (e) {
                      return Object(s.jsx)(
                        'li',
                        {
                          children: Object(s.jsx)('a', {
                            href: e.url,
                            target: '_blank',
                            children: Object(s.jsx)('i', { className: e.className }),
                          }),
                        },
                        e.name,
                      );
                    });
                  return Object(s.jsx)('footer', {
                    children: Object(s.jsxs)('div', {
                      className: 'row',
                      children: [
                        Object(s.jsxs)('div', {
                          className: 'twelve columns',
                          children: [
                            Object(s.jsx)('ul', { className: 'social-links', children: e }),
                            Object(s.jsx)('ul', {
                              className: 'copyright',
                              children: Object(s.jsxs)('li', {
                                children: ['\xa9 Copyright ', new Date().getFullYear(), ' ', this.props.data.name],
                              }),
                            }),
                          ],
                        }),
                        Object(s.jsx)('div', {
                          id: 'go-top',
                          children: Object(s.jsx)('a', {
                            className: 'smoothscroll',
                            title: 'Back to Top',
                            href: '#home',
                            children: Object(s.jsx)('i', { className: 'icon-up-open' }),
                          }),
                        }),
                      ],
                    }),
                  });
                },
              },
            ]),
            t
          );
        })(n.Component),
        O = {
          main: {
            name: 'Hisham Taha Kamal-Al-Din',
            occupation:
              'Software Developer (JavaScript, TypeScript, Node.js, Express.js, Nest.js, MongoDB, Angular, React) Developer',
            description: 'Creative, detail-oriented, ambitious, assiduous, animated JavaScript developer',
            image: 'profilepic.jpg',
            bio:
              'Node/TypeScript/JavaScript Developer, GIS Analyst.\nGraduate BA, Department of Geography and GIS, trainee in the (GIS, and MEAN Stack) Tracks at ITI Diploma. finish scholarship of the Institute of Technological Innovation in Egypt and many other courses.',
            gisWebsite: 'https://hisham-taha.portfoliobox.net/projects',
            contactmessage: 'If I can be of assistance, please do not hesitate to contact me...',
            email: 'hisham.taha.work@gmail.com',
            phone: '+20122-346-7708',
            address: { street: 'Idrsie school, st', city: 'Alexandria, Egypt', state: 'Hadid we solp', zip: '21575' },
            website: 'http://www.hisham.work',
            resumedownload: 'https://1drv.ms/b/s!AuHMK3CYszsBhN8fq6WfR_AIkYDf6g?e=HXxCVp',
            social: [
              {
                name: 'Linked-IN',
                url: 'https://www.linkedin.com/in/hisham-taha-kamal-al-din/',
                className: 'fa fa-linkedin',
              },
              { name: 'GitHub', url: 'https://github.com/Hisham-TK?tab=repositories', className: 'fa fa-github' },
              { name: 'GIS Website', url: 'https://hisham-taha.portfoliobox.net/', className: 'fa fa-globe-africa' },
              {
                name: 'Solo learn',
                url: 'https://www.sololearn.com/Profile/7251463',
                className: 'fa fa-graduation-cap',
              },
              {
                name: 'Code-wars',
                url: 'https://www.codewars.com/users/Hisham.Taha',
                className: 'fab fa-galactic-republic',
              },
              {
                name: 'Send E-Mail',
                url:
                  "mailto:hisham.taha.work@gmail.com?Subject=I'm%20?%20My%20Phone%20Number%20?%20My%20E-mail%20?%20I%20would%20like%20to%20ask%20you%20about%20",
                className: 'fas fa-at',
              },
              {
                name: 'Facebook',
                url: 'https://www.facebook.com/Hisham.Taha.Kamal.AlDin',
                className: 'fa fa-facebook',
              },
            ],
          },
          work: [
            {
              company: 'Index Group',
              title: 'Intermediate -> Senior Node.js',
              years: 'Jan 2020 - Present',
              description:
                'Fix problems and add new features to any Applications (Courier, Events, Home, Food, Sharing)',
            },
            {
              company: 'MicroTec SA',
              title: 'Junior Software Developer (MEAN Stack)',
              years: 'Apr 2020 - Des 2020',
              description:
                'Build an ERP (Enterprise resource planning) System from business (JIRA User Stories, Wireframes) in Agile process until secured APIs.',
            },
          ],
          education: [
            {
              school: 'Information Technology Institute (ITI) Mansora',
              degree: 'IT Diploma at MEAN Stack Development',
              graduated: 'Mar 2019',
              description:
                'Track courses :\n1. Object-oriented using C#\n2. Client-side technologies (HTML 4-5, CSS 2-3, JavaScript 5-6 Design patterns)\n3. jQuery + jQuery UI\n4. Database (MS SQL Server, MongoDB)\n5. Node, Express, Ajax\n6. Angular 7\n7. Responsive web (Bootstrap 4)\n8. Freelancing, Communication, Presentation, CV writing skills',
            },
            {
              school:
                'Next Technology Leaders (NTL), University of California - Davis (UC-Davis) , and Technology Innovation & Entrepreneurship Center (TIEC) Online',
              degree: 'Trainee as GIS Specialist',
              graduated: 'Jul 2018',
              description:
                'Specialization Courses :\n1. Fundamentals of GIS\n2. GIS Data Formats, Design, and Quality\n3. Geospatial and Environmental Analysis\n4. Imagery, Automation, and Applications\n5. Geospatial Analysis Project',
            },
            {
              school: 'Information Technology Institute (ITI) Alexandria',
              degree: 'IT Diploma at MEAN Stack Development',
              graduated: 'Apr 2018',
              description:
                'Track courses :\n1. GIS Fundamentals\n2. ArcGIS (Desktop, Geodatabase, Server, Extensions, Add-ins for Desktop)\n3. Open Source GIS (Q-GIS, Geo-Server, PostgreSQL, CartoView)\n4. Remote Sensing and Digital Image Processing\n5. ERDAS Imagine\n6. Create a Desktop App. using SDK for WPF\n7. Client-Side Technologies (HTML4, CSS2, JavaScript)\n8. Create Web App. Using ArcGIS APIs for JavaScript\n9. Communication, presentation & interviewing skills',
            },
            {
              school: 'Favulty of Arts, Alexandria University',
              degree: 'BA in Geographic Information System, & Geography',
              graduated: 'May 2007',
              description:
                'List of subjects:\nThe foundations of physical geography (6 months)\nThe foundations of human geography (6 months)\nGeography of Africa (3 months)\nGeography of Arab World (3 months)\nGeography of Asia (3 months)\nIntroduction to Cartography (4 months)\nIntroduction to GIS (3 months)\nAdvanced GIS (3 months)\nAerial photography\u200e (3 months)\nMap projection (3 months)\nGeomorphology (6 months)\nClimatology and Meteorology (6 months)\nHydrology (3 months)\nBiogeography (3 months)\nOceanography and Limnology (3 months)\nEconomic geography (6 months)\nPolitical Geography (3 months)\nPopulation geography (6 months)\nSettlement geography (3 months)\nEnvironmental problems (3 months)\nGeography of Egypt (6 months)',
            },
            {
              school: 'Arab Academy for Science, Technology and Maritime Transport (AASTMT) Alexandria',
              degree: 'Trainee as GIS Specialist',
              graduated: 'Sep 2017',
              description:
                'GIS Courses \u2013 Grade: A\n1. Fundamentals of GIS\n2. Advanced Editing Auto-CAD Map\n3. Spatial Analysis in ArcGIS\n4. Geo-Database for ArcGIS\n5. Map-Info Professional Basics',
            },
            {
              school: 'Institute of Graduate Stadies and Research (IGSR) Alexandria',
              degree: 'Trainee as GIS, RS Specialist',
              graduated: 'Dec 2016',
              description:
                'GIS Courses \u2013 Grade: A\n1. Introduction to ArcGIS Desktop\n2. Working 3D data using ArcGIS\n3. Suitability Analysis Using ArcGIS\n\nRemote Sensing Courses \u2013 Grade: A\n1. Image Processing Using ERDAS',
            },
          ],
          skillmessage: 'Most recent skills',
          skills: [
            {
              name: 'HTML/5',
              desc:
                'Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.',
              level: '85%',
            },
            {
              name: 'Markdown',
              desc:
                'Markdown is a lightweight markup language for creating formatted text using a plain-text editor. John Gruber and Aaron Swartz created Markdown in 2004 as a markup language that is appealing to the human users in its source form.',
              level: '75%',
            },
            {
              name: 'CSS/3',
              desc:
                'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
              level: '90%',
            },
            {
              name: 'Bootstrap/4',
              desc:
                'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
              level: '85%',
            },
            {
              name: 'JavaScript - ES/10',
              desc:
                'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
              level: '90%',
            },
            {
              name: 'jQuery',
              desc:
                'jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax. It is free, open-source software using the permissive MIT License. As of May 2019, jQuery is used by 73% of the 10 million most popular websites.',
              level: '90%',
            },
            {
              name: 'TypeScript',
              desc:
                'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for development of large applications and transcompiles to JavaScript.',
              level: '85%',
            },
            {
              name: 'Node.js',
              desc:
                'Node.js is an open-source, cross-platform, back-end, JavaScript runtime environment that executes JavaScript code outside a web browser.',
              level: '95%',
            },
            {
              name: 'Express.js',
              desc:
                'Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.',
              level: '90%',
            },
            {
              name: 'Nest.js',
              desc:
                'A progressive Node.js framework for building efficient, reliable and scalable server-side applications.',
              level: '95%',
            },
            {
              name: 'React',
              desc:
                'React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.',
              level: '95%',
            },
            {
              name: 'Angular/8',
              desc:
                'Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
              level: '85%',
            },
            {
              name: 'MongoDB',
              desc:
                'MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc.',
              level: '80%',
            },
            {
              name: 'SQL',
              desc:
                'SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system.',
              level: '50%',
            },
            {
              name: 'WebPack',
              desc:
                'webpack is an open-source JavaScript module bundler. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. webpack takes modules with dependencies and generates static assets representing those modules.',
              level: '85%',
            },
            {
              name: 'Firebase',
              desc:
                'Firebase is a platform developed by Google for creating mobile and web applications. It was originally an independent company founded in 2011. In 2014, Google acquired the platform and it is now their flagship offering for app development.',
              level: '75%',
            },
            {
              name: 'Redis',
              desc:
                'Redis is an in-memory data structure store, used as a distributed, in-memory key\u2013value database, cache and message broker, with optional durability. Redis supports different kinds of abstract data structures, such as strings, lists, maps, sets, sorted sets, HyperLogLogs, bitmaps, streams, and spatial indexes.',
              level: '90%',
            },
            {
              name: 'RabbitMQ',
              desc:
                'RabbitMQ is an open-source message-broker software that originally implemented the Advanced Message Queuing Protocol and has since been extended with a plug-in architecture to support Streaming Text Oriented Messaging Protocol, MQ Telemetry Transport, and other protocols.',
              level: '95%',
            },
            {
              name: 'Docker',
              desc:
                'Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels.',
              level: '75%',
            },
            {
              name: 'Kubernates',
              desc:
                'Kubernetes is an open-source container-orchestration system for automating computer application deployment, scaling, and management. It was originally designed by Google and is now maintained by the Cloud Native Computing Foundation.',
              level: '50%',
            },
            {
              name: 'REST',
              desc:
                'Representational state transfer is a software architectural style that defines a set of constraints to be used for creating Web services. Web services that conform to the REST architectural style, called RESTful Web services, provide interoperability between computer systems on the internet.',
              level: '95%',
            },
            {
              name: 'GraphQL',
              desc:
                'GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data. GraphQL was developed internally by Facebook in 2012 before being publicly released in 2015.',
              level: '85%',
            },
            {
              name: 'ElasticSearch',
              desc:
                'Elasticsearch is a search engine based on the Lucene library. It provides a distributed, multitenant-capable full-text search engine with an HTTP web interface and schema-free JSON documents. Elasticsearch is developed in Java.',
              level: '85%',
            },
            {
              name: 'Git',
              desc:
                'Git is a distributed version-control system for tracking changes in any set of files, originally designed for coordinating work among programmers cooperating on source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows.',
              level: '90%',
            },
            {
              name: 'CircleCI',
              desc:
                'Self-hosted runners now available on Scale plan, for organizations operating at scale, our self-hosted runners give the additional control and flexibility needed to meet your most unique CI/CD requirements.',
              level: '80%',
            },
            {
              name: 'Debuging',
              desc:
                'In computer programming and software development, debugging is the process of finding and resolving bugs within computer programs, software, or systems.',
              level: '95%',
            },
            {
              name: 'PostMan/FireCamp',
              desc:
                'The Collaboration Platform for API Development, Simplify each step of building an API and streamline collaboration so you can create better APIs\u2014faster.',
              level: '90%',
            },
            {
              name: 'ESRI/Google maps API',
              desc:
                'The Maps JavaScript API lets you customize maps with your own content and imagery for display on web pages and mobile devices.',
              level: '95%',
            },
            {
              name: 'GIS',
              desc:
                'A geographic information system is a conceptualized framework that provides the ability to capture and analyze spatial and geographic data.',
              level: '95%',
            },
            {
              name: 'ArcGIS',
              desc:
                'ArcGIS is a geographic information system for working with maps and geographic information maintained by the Environmental Systems Research Institute',
              level: '95%',
            },
            {
              name: 'qGIS',
              desc:
                'QGIS is a free and open-source cross-platform desktop geographic information system application that supports viewing, editing, and analysis of geospatial data.',
              level: '95%',
            },
            {
              name: 'Remote Sensing (RS)',
              desc:
                'Remote sensing is the acquisition of information about an object or phenomenon without making physical contact with the object and thus is in contrast to on-site observation',
              level: '90%',
            },
          ],
          quotes: [
            { text: '\u201cSimplicity is the soul of efficiency.\u201d', user: 'Austin Freeman' },
            { text: '\u201cFirst, solve the problem. Then, write the code.\u201d', user: 'John Johnson' },
            {
              text:
                '\u201cPerfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.\u201d ',
              user: 'Antoine de Saint-Exupery',
            },
            { text: '\u201cFix the cause, not the symptom.\u201d', user: 'Steve Maguire' },
            {
              text: '\u201cOptimism is an occupational hazard of programming: feedback is the treatment. \u201c',
              user: 'Kent Beck',
            },
          ],
        },
        y = (function (e) {
          Object(d.a)(t, e);
          var a = Object(h.a)(t);
          function t(e) {
            var s;
            return (
              Object(c.a)(this, t),
              ((s = a.call(this, e)).state = { foo: 'bar', resumeData: O }),
              m.a.initialize('UA-110570651-1'),
              m.a.pageview(window.location.pathname),
              s
            );
          }
          return (
            Object(l.a)(t, [
              {
                key: 'render',
                value: function () {
                  return Object(s.jsxs)('div', {
                    className: 'App',
                    children: [
                      Object(s.jsx)(p, { data: this.state.resumeData.main }),
                      Object(s.jsx)(u, { data: this.state.resumeData.main }),
                      Object(s.jsx)(b, { data: this.state.resumeData.work }),
                      Object(s.jsx)(g, { data: this.state.resumeData.skills }),
                      Object(s.jsx)(f, { data: this.state.resumeData.education }),
                      Object(s.jsx)(v, { data: this.state.resumeData.quotes }),
                      Object(s.jsx)(j, { data: this.state.resumeData.main }),
                      Object(s.jsx)(x, { data: this.state.resumeData.main }),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(n.Component),
        w = Boolean(
          'localhost' === window.location.hostname ||
            '[::1]' === window.location.hostname ||
            window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/),
        );
      function S(e) {
        navigator.serviceWorker
          .register(e)
          .then(function (e) {
            e.onupdatefound = function () {
              var a = e.installing;
              a.onstatechange = function () {
                'installed' === a.state &&
                  (navigator.serviceWorker.controller
                    ? console.log('New content is available; please refresh.')
                    : console.log('Content is cached for offline use.'));
              };
            };
          })
          .catch(function (e) {
            console.error('Error during service worker registration:', e);
          });
      }
      r.a.render(Object(s.jsx)(y, {}), document.getElementById('root')),
        (function () {
          if ('serviceWorker' in navigator) {
            if (new URL('/hisham.work', window.location).origin !== window.location.origin) return;
            window.addEventListener('load', function () {
              var e = ''.concat('/hisham.work', '/service-worker.js');
              w
                ? (function (e) {
                    fetch(e)
                      .then(function (a) {
                        404 === a.status || -1 === a.headers.get('content-type').indexOf('javascript')
                          ? navigator.serviceWorker.ready.then(function (e) {
                              e.unregister().then(function () {
                                window.location.reload();
                              });
                            })
                          : S(e);
                      })
                      .catch(function () {
                        console.log('No internet connection found. App is running in offline mode.');
                      });
                  })(e)
                : S(e);
            });
          }
        })();
    },
  },
  [[19, 1, 2]],
]);
//# sourceMappingURL=main.64b8222d.chunk.js.map
