"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function (window) {
  if (!window.app) {
    window.app = {};
  }
  var breakpoints = {
    xxl: 1919,
    xl: 1439,
    lg: 1279,
    md: 991,
    sm: 575
  };
  var events = {}; // кастомные события

  window.app.config = {
    events: events,
    breakpoints: breakpoints
    // ...
  };
})(window);
(function (window) {
  if (!window.app) {
    window.app = {};
  }
  var checkResponse = function checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430 ".concat(res.status));
  };
  var checkResponseSuccess = function checkResponseSuccess(res) {
    if (res && res.success) {
      return res;
    }
    return Promise.reject("\u041E\u0442\u0432\u0435\u0442 \u043D\u0435 success: ".concat(res));
  };
  var buildHttpClient = function buildHttpClient(baseUrl) {
    return function (endpoint) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return fetch("".concat(baseUrl).concat(endpoint), options).then(checkResponse).then(checkResponseSuccess);
    };
  };
  var setObserver = function setObserver(element, handleObserve) {
    var manualConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var config = _objectSpread({
      childList: true
    }, manualConfig);
    var observer = new MutationObserver(function () {
      return handleObserve(element);
    });
    observer.observe(element, config);
  };
  var findAncestorsByClassName = function findAncestorsByClassName(el, className) {
    var stopElement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var ancestorEls = [];
    var currentParent = el.parentElement;
    if (!currentParent) {
      return ancestorEls;
    }
    while (currentParent !== null && currentParent !== stopElement) {
      if (currentParent.classList.contains(className)) {
        ancestorEls = [].concat(_toConsumableArray(ancestorEls), [currentParent]);
      }
      currentParent = currentParent.parentElement;
    }
    return ancestorEls;
  };
  var findAncestorByClassName = function findAncestorByClassName(el, className) {
    var ancestorEl = el.parentElement;
    while (!ancestorEl.classList.contains(className)) {
      ancestorEl = ancestorEl.parentElement;
      if (!ancestorEl) {
        return null;
      }
    }
    return ancestorEl;
  };
  var buildComponentLogger = function buildComponentLogger(componentName) {
    return function (text) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var msg = context ? "".concat(componentName, ":").concat(context, ":").concat(text) : "".concat(componentName, ":").concat(text);
      console.debug(msg);
      if (data) {
        console.dir(data);
      }
    };
  };
  var debounce = function debounce(callee, timeoutMs) {
    return function perform() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var previousCall = this.lastCall;
      this.lastCall = Date.now();
      if (previousCall && this.lastCall - previousCall <= timeoutMs) {
        clearTimeout(this.lastCallTimer);
      }
      this.lastCallTimer = setTimeout(function () {
        return callee.apply(void 0, args);
      }, timeoutMs);
    };
  };
  var throttle = function throttle(callee, timeout) {
    var timer = null;
    return function perform() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (timer) return;
      timer = setTimeout(function () {
        callee.apply(void 0, args);
        clearTimeout(timer);
        timer = null;
      }, timeout);
    };
  };
  window.app.lib = {
    setObserver: setObserver,
    findAncestorsByClassName: findAncestorsByClassName,
    findAncestorByClassName: findAncestorByClassName,
    buildComponentLogger: buildComponentLogger,
    debounce: debounce,
    throttle: throttle,
    checkResponse: checkResponse,
    checkResponseSuccess: checkResponseSuccess,
    buildHttpClient: buildHttpClient
  };
})(window);
var toggleTooltips = function toggleTooltips(slider) {
  var tooltips = slider.querySelectorAll('.noUi-tooltip');
  slider.noUiSlider.on('start', function () {
    tooltips.forEach(function (tooltip) {
      tooltip.classList.add('visible');
    });
  });
  slider.noUiSlider.on('end', function () {
    tooltips.forEach(function (tooltip) {
      tooltip.classList.remove('visible');
    });
  });
};
var sliderPrice = document.getElementById('slider-price');
var priceMin = document.getElementById('price_min');
var priceMax = document.getElementById('price_max');
noUiSlider.create(sliderPrice, {
  start: [234, 7500],
  connect: true,
  range: {
    'min': 0,
    'max': 9999
  },
  format: {
    to: function to(value) {
      return Math.round(value);
    },
    from: function from(value) {
      return Math.round(value);
    }
  },
  tooltips: {
    to: function to(value) {
      return "".concat(Math.round(value), "$");
    },
    from: function from(value) {
      return Number(value.replace('$', ''));
    }
  }
});
sliderPrice.noUiSlider.on('update', function (values, handle) {
  if (handle === 0) {
    priceMin.value = "".concat(Math.round(values[handle]), "$");
  }
  if (handle === 1) {
    priceMax.value = "".concat(Math.round(values[handle]), "$");
  }
});
priceMin.addEventListener('change', function (event) {
  var minPrice = parseFloat(event.target.value.replace('$', ''));
  var maxPrice = parseFloat(priceMax.value.replace('$', ''));
  if (minPrice > maxPrice || isNaN(minPrice) || isNaN(maxPrice)) {
    return;
  }
  sliderPrice.noUiSlider.set([minPrice, null]);
});
priceMax.addEventListener('change', function (event) {
  var maxPrice = parseFloat(event.target.value.replace('$', ''));
  var minPrice = parseFloat(priceMin.value.replace('$', ''));
  if (maxPrice < minPrice || isNaN(maxPrice) || isNaN(minPrice)) {
    return;
  }
  sliderPrice.noUiSlider.set([null, maxPrice]);
});
toggleTooltips(sliderPrice);
var sliderThc = document.getElementById('slider-thc');
var thcValue = document.getElementById('thc_max');
noUiSlider.create(sliderThc, {
  start: 65,
  connect: 'lower',
  range: {
    'min': 0,
    'max': 100
  },
  format: {
    to: function to(value) {
      return Math.round(value);
    },
    from: function from(value) {
      return Math.round(value);
    }
  },
  tooltips: {
    to: function to(value) {
      return "".concat(Math.round(value), "%");
    },
    from: function from(value) {
      return Number(value.replace('%', ''));
    }
  }
});
sliderThc.noUiSlider.on('update', function (values, handle) {
  thcValue.value = "".concat(Math.round(values[handle]), "%");
});
thcValue.addEventListener('change', function (event) {
  sliderThc.noUiSlider.set(event.target.value);
});
toggleTooltips(sliderThc);
var sliderCbd = document.getElementById('slider-cbd');
var cbdValue = document.getElementById('cbd_max');
noUiSlider.create(sliderCbd, {
  start: 65,
  connect: 'lower',
  range: {
    'min': 0,
    'max': 100
  },
  format: {
    to: function to(value) {
      return Math.round(value);
    },
    from: function from(value) {
      return Math.round(value);
    }
  },
  tooltips: {
    to: function to(value) {
      return "".concat(Math.round(value), "%");
    },
    from: function from(value) {
      return Number(value.replace('%', ''));
    }
  }
});
sliderCbd.noUiSlider.on('update', function (values, handle) {
  cbdValue.value = "".concat(Math.round(values[handle]), "%");
});
cbdValue.addEventListener('change', function (event) {
  sliderCbd.noUiSlider.set(event.target.value);
});
toggleTooltips(sliderCbd);
var buttons = document.querySelectorAll('.option__button');
buttons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    var container = event.currentTarget.closest('.option__element');
    var list = container.querySelector('.option__list');
    var icons = button.querySelectorAll('.option__icon');
    list.classList.toggle('visible');
    icons.forEach(function (icon) {
      return icon.classList.toggle('rotate');
    });
  });
});
var checkboxes = document.querySelectorAll('.option__input');
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    if (this.checked) {
      createBadge(this);
    } else {
      removeBadge(this);
    }
  });
});
function createBadge(checkbox) {
  var label = checkbox.nextElementSibling;
  var badgeContainer = document.querySelector('.form__badge');
  var badgeItem = document.createElement('div');
  var badgeDescription = document.createElement('span');
  var badgeButton = document.createElement('button');
  var badgeButtoninfo = document.createElement('span');
  badgeItem.classList.add('badge__item');
  badgeDescription.classList.add('badge__description');
  badgeDescription.textContent = label.textContent.trim();
  badgeButton.classList.add('badge__button');
  badgeButtoninfo.classList.add('visually-hidden');
  badgeButtoninfo.textContent = 'удалить этот фильтр';
  badgeButton.addEventListener('click', function () {
    badgeItem.remove();
    checkbox.checked = false;
  });
  badgeButton.appendChild(badgeButtoninfo);
  badgeItem.appendChild(badgeDescription);
  badgeItem.appendChild(badgeButton);
  badgeContainer.appendChild(badgeItem);
}
function removeBadge(checkbox) {
  var label = checkbox.nextElementSibling;
  var badgeItems = document.querySelectorAll('.badge__item');
  badgeItems.forEach(function (badgeItem) {
    if (badgeItem.querySelector('.badge__description').textContent.trim() === label.textContent.trim()) {
      badgeItem.remove();
    }
  });
}
var sortButton = document.querySelector('.sort__button');
var sortList = document.querySelector('.sort__list');
sortButton.addEventListener('click', function () {
  sortList.classList.toggle('visible');
});
document.querySelectorAll('.radio-input').forEach(function (radio) {
  radio.addEventListener('change', function () {
    var _this = this;
    var radios = document.querySelectorAll('.radio-input');
    radios.forEach(function (r, index) {
      if (index <= Array.from(radios).indexOf(_this)) {
        r.closest('.slider-nose__item').classList.add('active');
      } else {
        r.closest('.slider-nose__item').classList.remove('active');
      }
    });
  });
});