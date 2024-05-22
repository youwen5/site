{ pkgs ? import <nixpkgs> {} }:

pkgs.stdenv.mkDerivation {
  name = "pnpm-project";
  src = ./.;

  buildInputs = [
    pkgs.nodejs
    pkgs.nodePackages.pnpm
  ];

  buildPhase = ''
    pnpm install
    pnpm build
  '';

  installPhase = ''
    mkdir -p $out
    cp -r dist/* $out/
  '';
}
