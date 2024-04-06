import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'


const getGrid = selectot => {
    let elements = gsap.utils.toArray(selectot),
                    bounds,
                    getSubset = (axis, dimension, alternating, merge) => {
                        let a=[],
                            subsets = {},
                            onlyEven = alternating === "even",
                            p
                        bounds.forEach((b, i) => {
                            let position = Math.round(b[axis] + b[dimension] /2),
                                            subset = subsets[position]
                            subset || (subsets[position] = subset = [])
                            subset.push(elements)
                        })
                    }
}