Search.setIndex({"docnames": ["bad-scaling", "faq", "golden-rules", "history", "index", "theory/atom/conv2d", "theory/atom/embed", "theory/atom/index", "theory/atom/linear", "theory/bond/index", "theory/bond/nonlinearities", "theory/compound/gpt", "theory/compound/index", "theory/module", "theory/vector"], "filenames": ["bad-scaling.rst", "faq.rst", "golden-rules.rst", "history.rst", "index.rst", "theory/atom/conv2d.rst", "theory/atom/embed.rst", "theory/atom/index.rst", "theory/atom/linear.rst", "theory/bond/index.rst", "theory/bond/nonlinearities.rst", "theory/compound/gpt.rst", "theory/compound/index.rst", "theory/module.rst", "theory/vector.rst"], "titles": ["Bad scaling", "Frequently asked questions", "Golden rules for scaling", "The science of scale", "Welcome to the Modula docs!", "Conv2d", "Embedding", "Atomic modules", "Linear", "Bond modules", "Nonlinearities", "GPT", "Compound modules", "Modules", "Vectors"], "terms": {"At": [0, 2], "simplest": 0, "level": 0, "neural": [0, 2, 3, 4], "network": [0, 1, 2, 3, 4], "ar": [0, 1, 2], "train": [0, 1, 2], "iter": [0, 2], "follow": [0, 2], "oper": [0, 2], "weight": [0, 1, 2], "learning_r": [0, 2], "gradient": [0, 2, 3], "where": [0, 2], "i": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], "float": [0, 2], "loss": [0, 2], "function": [0, 2], "respect": [0, 2], "Of": 0, "cours": [0, 2], "practic": [0, 2], "we": [0, 1, 2, 4], "mai": [0, 2], "want": [0, 1, 2], "us": [0, 1, 2, 3, 4], "addit": [0, 1], "trick": 0, "momentum": [0, 2], "let": [0, 2], "": [0, 2], "ignor": 0, "detail": 0, "like": [0, 3], "now": [0, 2], "unfortun": 0, "thi": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], "simpl": [0, 1, 2, 4], "descent": [0, 2, 3], "doe": [0, 1, 2], "well": [0, 1], "up": [0, 4], "architectur": [0, 1, 2], "what": [0, 2], "mean": [0, 1, 2], "suppos": 0, "befor": 0, "grow": 0, "increas": [0, 2], "its": [0, 2], "width": [0, 3], "number": [0, 2], "neuron": 0, "layer": 0, "depth": 0, "In": [0, 1, 2], "might": [0, 2], "other": [0, 1, 2, 3], "dimens": [0, 1, 2], "residu": [0, 2], "block": [0, 2], "transform": [0, 2], "stick": 0, "simplifi": 0, "pictur": 0, "under": [0, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], "can": [0, 2, 4], "break": 0, "two": [0, 3], "main": [0, 2], "wai": [0, 2], "The": [0, 1], "first": [0, 2, 4], "problem": [0, 2], "optim": [0, 3, 4], "learn": [0, 1, 2, 3, 4], "rate": [0, 1, 2, 4], "drift": 0, "certain": 0, "becaus": [0, 1, 2, 3], "need": [0, 2], "re": [0, 1], "tune": 0, "thing": 0, "which": [0, 2], "expens": 0, "time": [0, 1], "consum": 0, "second": [0, 2], "sometim": 0, "perform": [0, 2], "actual": 0, "get": [0, 1, 2], "wors": [0, 2], "even": [0, 2, 3], "remain": 0, "stabl": 0, "grew": 0, "hope": [0, 2, 4], "make": [0, 1, 2, 3, 4], "better": 0, "These": 0, "cartoon": 0, "illustr": [0, 2], "typic": 0, "behaviour": 0, "On": [0, 2, 3], "left": 0, "right": [0, 1, 2], "deterior": 0, "good": [0, 2], "new": [0, 2], "have": [0, 1, 2], "develop": 0, "machineri": 0, "larg": [0, 2, 3, 4], "solv": 0, "woe": 0, "It": [0, 2], "turn": [0, 2, 3], "out": [0, 1, 2, 3, 4], "defin": 0, "initi": [0, 1, 2], "along": 0, "special": 0, "normal": [0, 1, 2], "act": 0, "lead": [0, 1], "algorithm": 0, "remov": 0, "caus": [0, 2], "improv": [0, 4], "modula": [0, 1, 2], "automat": [0, 3, 4], "infer": 0, "necessari": [0, 1], "from": [0, 2], "so": [0, 2, 3], "user": 0, "focu": 0, "write": [0, 1], "while": [0, 2], "handl": 0, "properli": [0, 1], "doc": 0, "intend": 0, "explain": [0, 2, 4], "how": [0, 2], "work": [0, 1, 2, 3], "also": [0, 1, 2, 4], "introduc": [0, 2], "api": 0, "case": [0, 2], "you": [0, 1, 2, 3, 4], "don": [0, 2], "t": [0, 2], "care": 0, "about": [0, 1, 2], "next": [0, 2], "section": [0, 2], "manual": 0, "differ": [0, 1, 2], "framework": [0, 2, 4], "pytorch": 0, "jax": 0, "feel": [1, 3], "free": [1, 2, 3], "reach": [1, 2, 3, 4], "start": [1, 2, 4], "github": [1, 4], "issu": [1, 4], "ani": [1, 2], "ll": 1, "post": 1, "answer": [1, 2], "common": 1, "page": [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], "why": [1, 2], "modular": [1, 3, 4], "transfer": [1, 4], "across": [1, 2, 4], "scale": [1, 4], "term": [1, 2, 4], "when": [1, 2], "updat": [1, 2], "delta": 1, "mathbf": 1, "w": 1, "norm": [1, 2, 3, 4], "cdot": 1, "_": 1, "mathsf": 1, "m": 1, "modul": 1, "y": 1, "output": [1, 2], "behav": [1, 2], "mathcal": 1, "independ": 1, "A": [1, 2, 3], "littl": [1, 2], "bit": 1, "more": [1, 2, 3, 4], "formal": 1, "one": [1, 2], "lipschitz": 1, "leq": 1, "inequ": 1, "hold": [1, 2], "tightli": 1, "tensor": [1, 2], "align": [1, 2], "dure": [1, 2], "approx": 1, "fulli": [1, 2], "therefor": [1, 2], "provid": [1, 3], "control": [1, 2], "chang": [1, 2], "size": [1, 2], "sinc": [1, 2], "recurs": [1, 2], "each": [1, 2], "submodul": 1, "desir": 1, "properti": [1, 2], "fact": [1, 2], "extend": [1, 2], "all": [1, 2], "overal": 1, "compound": 1, "orthogon": [1, 2], "intial": 1, "No": 1, "could": [1, 4], "atom": 1, "gaussian": [1, 2], "reason": 1, "choos": [1, 2], "much": [1, 2], "easier": 1, "spectral": [1, 2, 3], "n": 1, "random": [1, 2], "matrix": [1, 2], "alwai": [1, 2], "contrast": 1, "an": [1, 2], "depend": 1, "entri": [1, 2], "wise": 1, "varianc": [1, 2], "sigma": [1, 2], "2": [1, 2], "difficult": [1, 2], "set": [1, 2], "matric": [1, 2], "benign": 1, "singular": [1, 2], "valu": [1, 2], "hand": 1, "averag": 1, "max": 1, "subtl": [1, 2], "numer": 1, "support": 1, "share": 1, "Not": 1, "yet": 1, "although": 1, "plan": 1, "implement": 1, "some": [1, 2, 3], "exampl": [1, 2], "your": 2, "huh": [2, 3, 4], "too": 2, "boil": 2, "down": 2, "few": 2, "principl": 2, "basic": 2, "algebra": 2, "bad": 2, "requir": 2, "unlearn": 2, "concept": 2, "been": 2, "taught": 2, "lectur": 2, "For": 2, "consid": [2, 4], "activ": 2, "unit": 2, "deep": [2, 3, 4], "101": 2, "intern": 2, "quit": 2, "compar": 2, "after": 2, "step": 2, "understand": 2, "point": 2, "standard": 2, "deviat": 2, "class": 2, "def": 2, "__init__": 2, "self": 2, "fan_out": 2, "int": 2, "fan_in": 2, "torch": 2, "randn": 2, "forward": 2, "x": 2, "return": 2, "matmul": 2, "most": 2, "conduct": 2, "reduct": 2, "e": 2, "smaller": 2, "than": 2, "happen": 2, "final": 2, "classifi": 2, "studi": 2, "import": 2, "larger": 2, "null": 2, "space": 2, "huge": 2, "input": 2, "map": 2, "zero": 2, "least": 2, "lie": 2, "nullspac": 2, "pick": 2, "order": 2, "compon": 2, "But": 2, "situat": 2, "non": 2, "chose": 2, "far": 2, "hindsight": 2, "blow": 2, "onli": 2, "solut": 2, "instead": 2, "assumpt": 2, "fall": 2, "small": 2, "fine": 2, "thei": 2, "quickli": 2, "warm": 2, "And": 2, "nice": 2, "bonu": 2, "show": 2, "switch": 2, "init": 2, "trivial": 2, "previou": 2, "style": [2, 4], "think": [2, 3], "beyond": 2, "distil": 2, "tenet": 2, "call": 2, "largest": 2, "carefulli": 2, "keep": 2, "mind": 2, "design": [2, 4], "worth": 2, "expand": 2, "here": [2, 3], "sai": 2, "comput": 2, "u": [2, 3, 4], "v": 2, "linalg": 2, "svd": 2, "tend": 2, "row": 2, "correspond": 2, "diagon": 2, "sourc": 2, "middl": 2, "net": 2, "preced": 2, "head": 2, "tail": 2, "know": 2, "both": [2, 4], "through": 2, "backpropag": 2, "appli": 2, "1": 2, "kind": 2, "everi": 2, "rest": 2, "do": 2, "should": 2, "alreadi": 2, "enough": 2, "gpt": 2, "ha": 2, "state": 2, "roughli": 2, "interv": 2, "equival": 2, "euclidean": 2, "length": 2, "math": 2, "sqrt": 2, "To": 2, "achiev": 2, "tell": 2, "top": 2, "One": 2, "check": [2, 4], "proport": 2, "intuit": 2, "factor": 2, "dimension": 2, "convert": 2, "take": 2, "vector": 2, "spit": 2, "clever": 2, "reparameter": 2, "reparameterizedlinear": 2, "empti": 2, "nn": 2, "orthogonal_": 2, "By": 2, "includ": 2, "convers": 2, "correct": 2, "easi": 2, "just": 2, "exactli": 2, "our": [2, 4], "experi": 2, "found": 2, "hyperparamet": [2, 3], "As": 2, "them": 2, "grad": 2, "spectral_norm": 2, "replac": 2, "adam": 2, "express": 2, "option": 2, "decai": 2, "look": 2, "3": 2, "form": 2, "resnet": 2, "residue_list": 2, "list": 2, "block_multipli": 2, "loop": 2, "ad": 2, "sub": 2, "ensur": 2, "contribut": 2, "allow": 2, "veri": 2, "without": [2, 3], "question": 2, "third": 2, "len": 2, "add": 2, "total": 2, "sum": 2, "divid": 2, "similar": 2, "idea": 2, "seen": 2, "frac": 2, "l": 2, "mathrm": 2, "0": 2, "though": 2, "involv": 2, "prevent": 2, "link": 2, "analogi": 2, "back": 2, "plai": 2, "role": 2, "multipli": 2, "safe": 2, "equal": 2, "long": 2, "individu": 2, "accord": 2, "4": 2, "between": [2, 3], "convention": 2, "done": 2, "lambda": 2, "shape": 2, "assum": 2, "uncorrel": 2, "expect": 2, "becom": 2, "spell": 2, "clearli": 2, "quantiti": 2, "convent": 2, "wisdom": 2, "someth": [2, 4], "logic": 2, "associ": 2, "scalabl": [2, 3, 4], "approach": 2, "base": 2, "simpler": 2, "anyth": 2, "variabl": 2, "object": 2, "same": 2, "direct": 2, "vein": 2, "obviat": 2, "histori": 2, "behind": 2, "move": 2, "autom": 2, "applic": 2, "mathemat": 2, "analogu": 2, "statement": 2, "outer": 2, "over": 2, "mlp": 2, "seem": 2, "10": 2, "paper": 2, "type": 2, "propos": 2, "smooth": 2, "limit": 2, "infinit": [2, 3], "mani": 2, "best": 2, "knowledg": 2, "natur": 2, "directli": 2, "inspir": 2, "still": [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], "construct": [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], "wa": 3, "written": [3, 4], "jeremi": [3, 4], "bias": 3, "hi": 3, "view": 3, "world": 3, "he": 3, "put": 3, "counterpoint": 3, "prevail": 3, "narr": 3, "If": [3, 4], "d": 3, "mention": 3, "either": 3, "pull": [3, 4], "request": [3, 4], "email": [3, 4], "twist": 3, "distanc": 3, "stabil": 3, "bernstein": [3, 4], "arash": 3, "vahdat": 3, "yisong": 3, "yue": 3, "ming": 3, "yu": 3, "liu": [3, 4], "neurip": 3, "2020": 3, "text": 3, "featur": 3, "greg": 3, "yang": [3, 4], "edward": 3, "j": 3, "hu": 3, "icml": 3, "2021": 3, "condit": 3, "jame": 3, "b": 3, "simon": 3, "arxiv": [3, 4], "2023": 3, "chri": 3, "mingard": 3, "kevin": 3, "huang": 3, "navid": 3, "azizan": 3, "tim": [3, 4], "minyoung": [3, 4], "hyojin": [3, 4], "bahng": [3, 4], "phillip": [3, 4], "isola": [3, 4], "2024": [3, 4], "grace": 4, "instal": 4, "run": 4, "pip": 4, "wrote": 4, "intent": 4, "theori": 4, "clear": 4, "help": 4, "speed": 4, "research": 4, "unclear": 4, "faq": 4, "Then": 4, "everyon": 4, "arrow": 4, "kei": 4, "jump": 4, "around": 4, "side": 4, "panel": 4, "prefer": 4, "read": 4, "academ": 4, "articl": 4, "author": 4, "titl": 4, "journal": 4, "2405": 4, "14813": 4, "year": 4, "thank": 4, "gavia": 4, "grai": 4, "uzai": 4, "girit": 4, "jyo": 4, "pari": 4, "feedback": 4}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"bad": 0, "scale": [0, 2, 3], "frequent": 1, "ask": 1, "question": 1, "golden": 2, "rule": 2, "The": [2, 3], "linear": [2, 8], "layer": 2, "three": 2, "fix": 2, "width": 2, "depth": 2, "kei": 2, "queri": 2, "dot": 2, "product": 2, "wrap": 2, "up": 2, "scienc": 3, "warn": [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], "pre": 3, "histori": 3, "truth": 3, "reconcili": 3, "autom": 3, "train": 3, "welcom": 4, "modula": 4, "doc": 4, "purpos": 4, "navig": 4, "companion": 4, "paper": 4, "acknowledg": 4, "conv2d": 5, "embed": 6, "atom": 7, "modul": [7, 9, 12, 13], "bond": 9, "nonlinear": 10, "gpt": 11, "compound": 12, "vector": 14}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 57}, "alltitles": {"Bad scaling": [[0, "bad-scaling"]], "Frequently asked questions": [[1, "frequently-asked-questions"]], "Golden rules for scaling": [[2, "golden-rules-for-scaling"]], "The linear layer": [[2, "the-linear-layer"]], "Three golden rules": [[2, "three-golden-rules"]], "Fixing width scaling": [[2, "fixing-width-scaling"]], "Fixing depth scaling": [[2, "fixing-depth-scaling"]], "Fixing key-query dot product scaling": [[2, "fixing-key-query-dot-product-scaling"]], "Wrapping up": [[2, "wrapping-up"]], "The science of scale": [[3, "the-science-of-scale"]], "Warning": [[3, null], [3, null], [5, null], [6, null], [7, null], [8, null], [9, null], [10, null], [11, null], [12, null], [13, null], [14, null]], "Pre-history": [[3, "pre-history"]], "Truth and reconciliation": [[3, "truth-and-reconciliation"]], "Automation of training": [[3, "automation-of-training"]], "Welcome to the Modula docs!": [[4, "welcome-to-the-modula-docs"]], "Purpose of the docs": [[4, "purpose-of-the-docs"]], "Navigating the docs": [[4, "navigating-the-docs"]], "Companion paper": [[4, "companion-paper"]], "Acknowledgements": [[4, "acknowledgements"]], "Conv2d": [[5, "conv2d"]], "Embedding": [[6, "embedding"]], "Atomic modules": [[7, "atomic-modules"]], "Linear": [[8, "linear"]], "Bond modules": [[9, "bond-modules"]], "Nonlinearities": [[10, "nonlinearities"]], "GPT": [[11, "gpt"]], "Compound modules": [[12, "compound-modules"]], "Modules": [[13, "modules"]], "Vectors": [[14, "vectors"]]}, "indexentries": {}})