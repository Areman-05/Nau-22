import type { PersonImage } from "./types";

export function unsplash(id: string, w = 1400): string {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
}

export function works(name: string, srcs: string[]): PersonImage[] {
  return srcs.map((src, i) => ({
    src,
    alt: `${name} — ${String(i + 1).padStart(2, "0")}`,
  }));
}

const u = unsplash;
const w = (path: string) =>
  path.startsWith("http")
    ? path
    : `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}`;

/** Cuadros: pintura contemporánea de gesto urbano, no fotos de graffiti en la calle. */
export const paint = {
  red: u("1531489956451-20957fab52f2"),
  canvas: u("1561214115-f2f134cc4912"),
  abstract: u("1536924940846-227afb31e2a5"),
  splash: u("1547891654-e66ed7ebb968"),
  yellow: u("1618331835717-801e976710b2"),
  purple: u("1596952896222-0f5ad38e5af0"),
  squares: u("1676200832719-35b267832b04"),
  greenY: u("1564483658547-215f1846c6fb"),
  colorMix: u("1545866282-9a1bb35f3b8b"),
  bw1: u("1622542796254-5b9c46ab0d2f"),
  bw2: u("1541542509806-6371b7b0a265"),
  bw3: u("1681235014294-588fea095706"),
  greenW: u("1578059457717-721408f0758e"),
  neo: u("1541961017774-22349e4a1262"),
  drip: u("1531056416665-266c4099c928"),
  layer: u("1533208087231-c3618eab623c"),
  ochre: u("1578301978693-85fa9c0320b9"),
  field: u("1615184697985-c9bde1b07da7"),
  ink: u("1602464729960-f95937746b68"),
  storm: u("1541512416146-3cf58d6b27cc"),
  colorful: u("1500462918059-b1a0cb512f1d"),
  cubes: u("1618005182384-a83a8bd57fbe"),
  pour1: u("1725851283652-9a4df850f81d"),
  pour2: u("1636220409531-1c7f946cc235"),
  paintClose: u("1513364776144-60967b0f800f"),
  afterglow: w("9/90/%22Afterglow%22_by_Ray_L._Burggraf%2C_2005.jpg/1280px-%22Afterglow%22_by_Ray_L._Burggraf%2C_2005.jpg"),
  dragon: w("d/d0/%22Dragon_Breath%22_by_Ray_L._Burggraf.jpg/1280px-%22Dragon_Breath%22_by_Ray_L._Burggraf.jpg"),
  codes: w("f/f4/%22Codes%22_Abstract_Watercolor_Painting_by_Bruce_Black_%282020%29.jpg/1280px-%22Codes%22_Abstract_Watercolor_Painting_by_Bruce_Black_%282020%29.jpg"),
  island: w("0/02/%22Island_Dreaming%22_by_Dano_J_Ocon_2019.jpg/1280px-%22Island_Dreaming%22_by_Dano_J_Ocon_2019.jpg"),
  sand: w("3/35/%27Sand%27%2C_Natalia_P._Fernandes.JPG/1280px-%27Sand%27%2C_Natalia_P._Fernandes.JPG"),
  stormW: w("8/81/%27Storm%27_Natalia_P._Fernandes.JPG/1280px-%27Storm%27_Natalia_P._Fernandes.JPG"),
  sky: w("e/e5/%27Abstract_sky%27%2C_1993_-_small_acrylic_painting_by_Dutch_artist_Fons_Heijnsbroek%3B_free_download_abstract_art_image%2C_CCO.jpg/1280px-%27Abstract_sky%27%2C_1993_-_small_acrylic_painting_by_Dutch_artist_Fons_Heijnsbroek%3B_free_download_abstract_art_image%2C_CCO.jpg"),
  fathers: w("7/78/%27Fathers_will_live%27_-_large_colorful%2C_abstract_painting_on_canvas%2C_painted_in_1993_in_acrylic_paint_by_Dutch_artist_Fons_Heijnsbroek._Abstract_expressionism_art_in_free_images_%26_high_resolution.jpg/1280px-thumbnail.jpg"),
  uruk: w("b/b9/%27Uruk_Cityscape%27-_Nigel_Packham-_acrylic_painting_2014%2C_110x140_cm.jpg/1280px-%27Uruk_Cityscape%27-_Nigel_Packham-_acrylic_painting_2014%2C_110x140_cm.jpg"),
  horiz: w("c/cd/1956_Horizontal_Movement.jpg/1280px-1956_Horizontal_Movement.jpg"),
  shadow: w("1/10/1959_Light_and_Shadow.jpg/1280px-1959_Light_and_Shadow.jpg"),
  gray: w("c/c8/1959_White-Gray-Black.jpg/1280px-1959_White-Gray-Black.jpg"),
  space: w("e/eb/1961_Space.jpg/1280px-1961_Space.jpg"),
  move: w("3/3b/1962_Movement.jpg/1280px-1962_Movement.jpg"),
  paint61: w("2/2d/1961_Painting.jpg/1280px-1961_Painting.jpg"),
  ovali: w("9/9c/1963_108_ovali_neri_150x150_cm_legno_su_tela.jpg/1280px-1963_108_ovali_neri_150x150_cm_legno_su_tela.jpg"),
  grigia: w("2/20/1972_Composizone_grigia_45x180.jpg/1280px-1972_Composizone_grigia_45x180.jpg"),
  joy: w("1/18/%22Joy_-_Collage_of_Life%22_%2C_Ren%C3%A9_Cheng%2C_oil_painting%2C_2017.jpg/1280px-%22Joy_-_Collage_of_Life%22_%2C_Ren%C3%A9_Cheng%2C_oil_painting%2C_2017.jpg"),
  alien: w("1/16/Alien_%282016%29_-_Sara_Shamma.jpg/1280px-Alien_%282016%29_-_Sara_Shamma.jpg"),
  blueRise: w("1/1c/Blue_Rise.JPG/1280px-Blue_Rise.JPG"),
  dimension: w("b/b0/Dimension.jpg/1280px-Dimension.jpg"),
  untitled: w("3/34/%28obra_sem_titulo%29.jpg/1280px-%28obra_sem_titulo%29.jpg"),
  ringlet: w("4/40/%28c%29_Philippe_Ringlet_-_Toile_H-B_250x488_cm_%28d%C3%A9tail%29.jpg/1280px-%28c%29_Philippe_Ringlet_-_Toile_H-B_250x488_cm_%28d%C3%A9tail%29.jpg"),
  nov1: "https://upload.wikimedia.org/wikipedia/commons/e/e0/02_Bed%C5%99ich_Novotn%C3%BD_Barevn%C3%A1_kompozice_kolem_r_1970_olej_na_pl%C3%A1tn%C4%9B_100_x_100_cm.jpg",
  nov2: "https://upload.wikimedia.org/wikipedia/commons/2/29/04_Bed%C5%99ich_Novotn%C3%BD_Bez_n%C3%A1zvu_80l%C3%A9ta_syntetick%C3%BD_email_a_akronex_na_sololitu_70_x_70_cm.jpg",
  nov3: "https://upload.wikimedia.org/wikipedia/commons/e/ec/05_Bed%C5%99ich_Novotn%C3%BD_%C4%8Cas_zastaven%C3%AD_80l%C3%A9ta_olej_a_syntetick%C3%BD_email_na_sololitu_66_x_56_cm.jpg",
  nov4: "https://upload.wikimedia.org/wikipedia/commons/5/52/07_Bed%C5%99ich_Novotn%C3%BD_Obraz_I_1989_olej_k%C5%99%C3%ADda_a_akronex_na_sololitu_131_x_113_cm.jpg",
  nov5: "https://upload.wikimedia.org/wikipedia/commons/d/dc/12_Bed%C5%99ich_Novotn%C3%BD_Spoutan%C3%A1_%C4%8Dern%C3%A1_1998_kombinovan%C3%A1_technika_100_x_100_cm.jpg",
  shrew: "https://upload.wikimedia.org/wikipedia/commons/6/6b/%27Shrewing_the_Tame%27_acryl_on_hemp_by_Nigel_Packham-110x130cm%2C_2016.jpg",
  vice: "https://upload.wikimedia.org/wikipedia/commons/4/46/00_Vice_Versa.jpg",
  britto: "https://upload.wikimedia.org/wikipedia/commons/9/91/00498_Britto_Velho_Pintura2.jpg",
  composit: "https://upload.wikimedia.org/wikipedia/commons/9/94/%22Composizione%22_di_Romano_Rizzato.jpg",
  linee: "https://upload.wikimedia.org/wikipedia/commons/4/40/%22Linee_ascendenti_IV%22_di_Romano_Rizzato.jpg",
  daisy: "https://upload.wikimedia.org/wikipedia/commons/8/8f/%27Daisy_Daisy%27_by_Mark_Lloyd.jpg",
  meme: "https://upload.wikimedia.org/wikipedia/commons/2/28/%27Meme%27_By_Mark_Lloyd.jpg",
  pion: "https://upload.wikimedia.org/wikipedia/commons/8/84/%22PION-IT-MIN%22.jpg",
  redit: "https://upload.wikimedia.org/wikipedia/commons/b/bd/%22RED-IT-PION%22.jpg",
  thing: "https://upload.wikimedia.org/wikipedia/commons/f/f1/%22THE_THING%22.jpg",
  grit: "https://upload.wikimedia.org/wikipedia/commons/d/dc/12_Bed%C5%99ich_Novotn%C3%BD_Spoutan%C3%A1_%C4%8Dern%C3%A1_1998_kombinovan%C3%A1_technika_100_x_100_cm.jpg",
  flux: "https://upload.wikimedia.org/wikipedia/commons/4/46/00_Vice_Versa.jpg",
  pulse: u("1578662996442-48f60103fc96"),
  magma: u("1604871000636-074fa5117945"),
  veil: u("1482164565953-04b62dcac1cd"),
  ember: u("1459908676235-d5f02a50184b"),
  tide: u("1501084817091-a4f3d1d19e07"),
  kiln: u("1515405295579-ba7b45403062"),
} as const;
